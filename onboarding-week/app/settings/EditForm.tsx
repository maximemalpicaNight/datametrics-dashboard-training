"use client"

import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import z from "zod";
import { Input } from "@/components/ui/input";

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      name  
      email
      avatar
      role
      organization {
        id
        name
        slug
        createdAt
      }
      createdAt
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $data: UserInput!) {
    updateUser(id: $id, data: $data) {
      id
      name
      email
      avatar
    }
  }
`;

const profileSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required'),
  avatar: z
    .string()
    .url('Must be a valid URL')
    .optional()
    .or(z.literal('')), // Allow empty string
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function EditForm() {
    
    const { data: userData, loading: loadingUser, error: errorUser } = useQuery(GET_CURRENT_USER);
    const [updateUser, { loading: updating }] = useMutation(UPDATE_USER);

    const [formData, setFormData] = useState<ProfileFormData>({
        name: '',
        email: '',
        avatar: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isDirty, setIsDirty] = useState(false);

    function handleChange(field: keyof ProfileFormData, value: string) {
        setFormData(prev => ({ ...prev, [field]: value }));
        setIsDirty(true);

        // Validate single field
        try {
        profileSchema.shape[field].parse(value);
        setErrors(prev => ({ ...prev, [field]: '' }));
        } catch (error) {
        if (error instanceof z.ZodError) {
            setErrors(prev => ({
            ...prev,
            [field]: error.errors[0]?.message || 'Invalid',
            }));
        }
        }
    };

    function handleCancel(e) {
        e.preventDefault();
        if (isDirty) {
            const confirmed = confirm('Discard unsaved changes?');
            if (!confirmed) return;
        }

        // Reset to original values
        if (userData?.me) {
            setFormData({
                name: userData.me.name,
                email: userData.me.email,
                avatar: userData.me.avatar || '',
            });
            setErrors({});
            setIsDirty(false);
        }
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Validate entire form
        try {
            const validatedData = profileSchema.parse(formData);

            await updateUser({
            variables: {
                id: userData.me.id,
                data: validatedData,
            },
            });

            alert('Profile updated successfully!');
            setIsDirty(false);
        } catch (error) {
            if (error instanceof z.ZodError) {
            // Set all field errors
            const fieldErrors: Record<string, string> = {};
            error.errors.forEach(err => {
                if (err.path[0]) {
                fieldErrors[err.path[0] as string] = err.message;
                }
            });
                setErrors(fieldErrors);
            } else {
                alert('Failed to update profile. Please try again.');
            }
        }
    }; 

    useEffect(() => {
        if (userData?.me) {
        setFormData({
            name: userData.me.name,
            email: userData.me.email,
            avatar: userData.me.avatar || '',
        });
        }
    }, [userData]);

    if (loadingUser) return <p>Loading...</p>
    if (errorUser) return <p>Error</p>
    if (!userData) return <p>No data found</p>

    return (
        <form className="flex flex-col gap-4">
            {formData.avatar && (
                <div className="mt-2">
                    <img
                    src={formData.avatar}
                    alt="Avatar preview"
                    className="w-20 h-20 rounded-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = '/placeholder-avatar.png';
                    }}
                    />
                </div>
            )}
            <Input
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="appearance-none border border-transparent outline-none font-inherit text-inherit rounded-md bg-neutral-600 px-2 py-1 focus:border-blue-300 w-3/4"
                error={errors.name}
                disabled={updating}
            />
            <Input
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="appearance-none border border-transparent outline-none font-inherit text-inherit rounded-md bg-neutral-600 px-2 py-1 focus:border-blue-300 w-3/4"
                error={errors.email}
                disabled={updating}
            />
            <Input
                value={formData.avatar}
                onChange={(e) => handleChange('avatar', e.target.value)}
                className="appearance-none border border-transparent outline-none font-inherit text-inherit rounded-md bg-neutral-600 px-2 py-1 focus:border-blue-300 w-3/4"
                error={errors.avatar}
                disabled={updating}
            />
            <div className="flex gap-2">
                <button className="bg-blue-600 px-2 py-1 rounded-md w-1/4 transition duration-200 ease-in-out hover:bg-blue-500" disabled={updating} onClick={handleSubmit}> Update </button>
                <button className="bg-red-600 px-2 py-1 rounded-md w-1/4 transition duration-200 ease-in-out hover:bg-red-500" onClick={handleCancel}> Cancel </button>
            </div>
            </form>
    )
}
