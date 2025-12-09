# Exercise 04: User Settings & Profile Management

## 📖 Required Reading & Learning Resources

**⚠️ IMPORTANT: Complete these learning materials BEFORE starting to code!**

This final exercise focuses on form validation and user experience - critical skills for production apps.

### 1. Zod Schema Validation (50-60 min)
**Why:** Zod provides type-safe validation. Industry standard for TypeScript projects.

- 📄 **[Zod Documentation](https://zod.dev/)** (20 min) - Read "Basic Usage" and "Primitives"
- 📺 **[Zod Crash Course](https://www.youtube.com/watch?v=L6BE-U3oy80)** (30 min) - Complete tutorial
- 🛠️ **Practice:** Write a schema for: name (min 2 chars), email (valid format), age (min 18)

**Key Concepts to Understand:**
- What is schema validation?
- How does `z.infer` work?
- What is the difference between `parse()` and `safeParse()`?
- How to create optional fields?

### 2. Form Validation Patterns (45-55 min)
**Why:** Good validation UX is an art. Learn industry best practices.

- 📄 **[Form Validation UX](https://www.nngroup.com/articles/errors-forms-design-guidelines/)** (20 min) - Nielsen Norman Group
- 📺 **[Form Validation Best Practices](https://www.youtube.com/watch?v=tojamjE30-U)** (25 min)
- 📄 **[Inline Validation Patterns](https://baymard.com/blog/inline-form-validation)** (15 min)

**Key Concepts to Understand:**
- When to validate: onBlur vs onChange vs onSubmit?
- Where to show error messages?
- How to write helpful error messages?
- What is "progressive disclosure" in forms?

### 3. Controlled Components Deep Dive (30-40 min)
**Why:** Master form state management in React.

- 📄 **[React Form Patterns](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)** (15 min) - Official docs
- 📺 **[React Forms In-Depth](https://www.youtube.com/watch?v=IkMND33x0qQ)** (20 min)
- 🛠️ **Practice:** Build a simple controlled input with validation

**Key Concepts to Understand:**
- Why use controlled vs uncontrolled inputs?
- How to manage multiple form fields efficiently?
- What is "single source of truth"?

### 4. Error Handling & User Feedback (35-45 min)
**Why:** Errors will happen. Handle them gracefully to build trust with users.

- 📄 **[Error Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)** (15 min) - NN/g
- 📺 **[UX of Error Messages](https://www.youtube.com/watch?v=8TqyGpbE2cs)** (20 min)
- 📄 **[Toast Notifications Best Practices](https://uxdesign.cc/how-to-design-better-toast-notifications-319f32ff8ea3)** (10 min)

**Key Concepts to Understand:**
- Field-level vs form-level errors?
- How to display success feedback?
- When to use toasts vs inline messages?
- What makes an error message helpful vs frustrating?

### 5. React State Management Patterns (30-40 min)
**Why:** Complex forms need organized state management.

- 📄 **[useState in Depth](https://react.dev/reference/react/useState)** (15 min) - Official React docs
- 📺 **[State Management Patterns](https://www.youtube.com/watch?v=u_o09PD_qAs)** (25 min)
- 🛠️ **Think About:** How to track if a form is "dirty" (has unsaved changes)?

**Key Concepts to Understand:**
- What is "derived state"?
- When to lift state up?
- What is the "dirty" flag pattern?

### 6. TypeScript with Forms (25-35 min)
**Why:** Type-safe forms prevent runtime errors and improve DX.

- 📄 **[TypeScript Form Types](https://www.totaltypescript.com/react-form-events)** (15 min) - Total TypeScript
- 📺 **[Type-Safe Forms in React](https://www.youtube.com/watch?v=cc_xmawJ8Kg)** (20 min)

**Key Concepts to Understand:**
- How to type form event handlers?
- How to type form state objects?
- How Zod helps with TypeScript inference?

### 7. Accessibility in Forms (20-30 min)
**Why:** Inclusive design matters. Forms must work for everyone.

- 📄 **[Form Accessibility](https://webaim.org/techniques/forms/)** (15 min) - WebAIM
- 📄 **[ARIA Labels for Forms](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms)** (10 min) - MDN

**Key Concepts to Understand:**
- Why are labels important?
- What is `aria-describedby`?
- How to make error messages accessible to screen readers?

---

### ✅ Self-Check Before Starting

Answer these questions to verify your understanding:

1. What is the benefit of using Zod over manual validation?
2. When should you show validation errors: onChange, onBlur, or onSubmit?
3. What is a controlled component and why use it?
4. What makes an error message helpful vs frustrating?
5. How does `z.infer` help with TypeScript?
6. What is the "dirty flag" pattern in forms?

If you can't answer these, **review the materials**. Form validation is fundamental to web development - get it right.

---

## 📚 Learning Objectives

By completing this exercise, you will learn:

- **Form Validation with Zod** - Schema-based validation for type-safe forms
- **Controlled Components** - Manage form state with React hooks
- **User Profile Updates** - Update user data via GraphQL mutations
- **Error Handling & UX** - Display field-level validation errors
- **Success Feedback** - Show confirmation messages after updates
- **Read-Only Fields** - Display non-editable organization info
- **Form Reset** - Revert changes if user cancels
- **Loading States** - Disable form during submission
- **Type-Safe Forms** - Use TypeScript with Zod schemas

## 🎯 Goal

Build a settings page where users can view and edit their profile information (name, email, avatar). Implement robust form validation using Zod, provide clear error messages, and show success/error feedback after updates. This exercise teaches you professional form handling patterns used in production applications.

## 🛠️ Technologies & Concepts Used

- **Zod** - TypeScript-first schema validation
- **Apollo Client Mutations** - Update user profile
- **React Hooks** - useState for form state, useEffect for data loading
- **GraphQL** - `me` query and `updateUser` mutation
- **Form UX Patterns** - Loading states, success messages, error handling
- **TypeScript** - Type-safe forms with inferred types from Zod
- **Tailwind CSS** - Form styling

## 📋 Requirements

### 1. Profile Information Form

Editable fields:
- **Name** - Text input, required, min 2 characters
- **Email** - Email input, required, valid email format
- **Avatar URL** - Text input, optional, valid URL format

Display avatar preview if URL provided.

### 2. Organization Information (Read-Only)

Display current user's organization:
- Organization name
- Organization slug
- Member since date
- Current role (ADMIN, MEMBER, VIEWER)

These fields should be visible but not editable.

### 3. Form Validation with Zod

Implement validation schema:
- Name: Required, min 2 chars, max 100 chars
- Email: Required, valid email format
- Avatar: Optional, valid URL format if provided

Show validation errors:
- Below each field
- In real-time (on blur or on change)
- Prevent submission if invalid

### 4. Save Changes Button

- Disabled if form is invalid
- Disabled while saving (loading state)
- Shows "Saving..." text during submission
- Shows "Saved ✓" briefly after success
- Re-enables after completion

### 5. Cancel/Reset Button

- Revert all changes to original values
- Clear validation errors
- Ask for confirmation if form is dirty (has changes)

### 6. Success & Error Messages

**Success:**
- Toast notification or alert: "Profile updated successfully!"
- Auto-dismiss after 3 seconds
- OR: Show green checkmark next to Save button

**Errors:**
- Display error message from GraphQL
- Don't clear form on error
- Allow user to fix and retry
- Show specific field errors if available

### 7. Loading States

- Show spinner while fetching user data (`me` query)
- Disable all inputs while saving
- Show loading text on submit button

## ✅ Definition of Done

Check off each item when complete:

- [ ] Profile form displays current user data on load
- [ ] Name field validation works (required, min/max length)
- [ ] Email field validation works (required, valid format)
- [ ] Avatar URL validation works (optional, valid URL)
- [ ] Validation errors show below fields in real-time
- [ ] Save button is disabled when form is invalid
- [ ] Save button shows loading state during mutation
- [ ] Success message displays after successful update
- [ ] Error message displays if mutation fails
- [ ] Cancel button reverts changes to original values
- [ ] Organization info is displayed (read-only)
- [ ] Avatar preview updates when URL changes
- [ ] Form is disabled during loading/saving
- [ ] No console errors or TypeScript errors
- [ ] Page is responsive on mobile and desktop

## 💡 Hints & Resources

### GraphQL Queries & Mutations

```typescript
import { gql, useQuery, useMutation } from '@apollo/client';

// Query current user
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

// Mutation to update user
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
```

### Zod Validation Schema

```typescript
import { z } from 'zod';

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

// Infer TypeScript type from schema
type ProfileFormData = z.infer<typeof profileSchema>;
```

### Form State Management

```typescript
import { useState, useEffect } from 'react';

function SettingsPage() {
  const { data: userData, loading: loadingUser } = useQuery(GET_CURRENT_USER);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    email: '',
    avatar: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDirty, setIsDirty] = useState(false);

  // Populate form when data loads
  useEffect(() => {
    if (userData?.me) {
      setFormData({
        name: userData.me.name,
        email: userData.me.email,
        avatar: userData.me.avatar || '',
      });
    }
  }, [userData]);

  // Handle input change
  const handleChange = (field: keyof ProfileFormData, value: string) => {
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

  return (
    // ... form JSX
  );
}
```

### Form Submission with Validation

```typescript
const [updateUser, { loading: updating }] = useMutation(UPDATE_USER);

const handleSubmit = async (e: React.FormEvent) => {
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
```

### Cancel/Reset Handler

```typescript
const handleCancel = () => {
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
```

### Form Input Component Example

```tsx
<div>
  <Input
    label="Name"
    value={formData.name}
    onChange={(e) => handleChange('name', e.target.value)}
    error={errors.name}
    disabled={updating}
  />
</div>
```

### Avatar Preview

```tsx
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
```

### Success Toast (Simple Version)

```typescript
const [showSuccess, setShowSuccess] = useState(false);

// After successful mutation
setShowSuccess(true);
setTimeout(() => setShowSuccess(false), 3000);

// In JSX
{showSuccess && (
  <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
    Profile updated successfully! ✓
  </div>
)}
```

## 🚫 Common Pitfalls

1. **Not populating form on load** - Form stays empty when data arrives
2. **Validating on every keystroke** - Validate on blur for better UX
3. **Not handling optional fields** - Avatar URL needs special handling
4. **Forgetting to disable during save** - Users might submit twice
5. **Not showing field-level errors** - Generic error messages are unhelpful
6. **Clearing form on error** - User loses their input
7. **No confirmation on cancel** - User loses unsaved changes accidentally
8. **Not marking form as dirty** - Can't detect if changes were made
9. **Hardcoding user ID** - Get from query result
10. **Wrong Zod schema for optional URL** - Empty string vs undefined

## 🧪 How to Test

### Manual Testing Steps:

#### Happy Path:
1. **Login** to the app (any user)
2. **Navigate** to Settings page
3. **Wait for data** - Form should populate with current user info
4. **Edit name** - Change to "New Name", check no errors
5. **Edit email** - Change to valid email, check no errors
6. **Add avatar URL** - Use: `https://api.dicebear.com/7.x/avataaars/svg?seed=Test`
7. **Check preview** - Avatar image should appear
8. **Click Save** - Should show loading state, then success message
9. **Refresh page** - Changes should persist

#### Validation Testing:
1. **Clear name** - Should show "Name is required" error
2. **Short name** - Type "A", should show "min 2 characters" error
3. **Invalid email** - Type "notanemail", should show "Invalid email" error
4. **Invalid URL** - Type "not-a-url" in avatar, should show error
5. **Check save button** - Should be disabled when errors exist
6. **Fix errors** - Errors should clear when fixed

#### Cancel Testing:
1. **Edit fields** - Make some changes
2. **Click Cancel** - Should ask for confirmation
3. **Confirm** - Fields should reset to original values
4. **Edit and cancel** - Changes should be discarded

#### Error Testing:
1. **Turn off internet** - Try to save
2. **Check error** - Should show error message
3. **Turn on internet** - Click save again, should work

### Expected Behavior:
- Form populates in < 1 second
- Validation errors appear below fields
- Save takes < 2 seconds
- Success message shows and auto-dismisses
- Organization info is not editable

## 📝 Validation Quiz

After completing this exercise, answer these questions **in your own words**:

### 1. Form Validation with Zod

**Q: What is Zod and why is it better than manual validation (if statements)?**

Your answer:
```
[Write your explanation here]
```

**Q: Explain how `z.infer` works. What TypeScript benefit does it provide?**

Your answer:
```
[Write your explanation here]
```

**Q: Show your validation schema for the profile form. Explain each field's rules.**

Your answer:
```
[Write your explanation here]
```

### 2. Controlled Components

**Q: What is a controlled component in React? How did you implement it in this exercise?**

Your answer:
```
[Write your explanation here]
```

**Q: Why do we use `useState` for form data instead of uncontrolled inputs with refs?**

Your answer:
```
[Write your explanation here]
```

### 3. Form State Management

**Q: What does "dirty" mean in form context? How did you track if the form is dirty?**

Your answer:
```
[Write your explanation here]
```

**Q: Explain the flow from user typing in an input to validation error showing on screen.**

Your answer:
```
[Write your explanation here]
```

### 4. UX & Error Handling

**Q: When should you validate a field: onChange, onBlur, or onSubmit? What did you choose and why?**

Your answer:
```
[Write your explanation here]
```

**Q: Why shouldn't you clear the form when a mutation fails?**

Your answer:
```
[Write your explanation here]
```

**Q: What's the difference between field-level errors and form-level errors? Give examples.**

Your answer:
```
[Write your explanation here]
```

### 5. Loading States

**Q: Why should you disable the form inputs while saving? What happens if you don't?**

Your answer:
```
[Write your explanation here]
```

**Q: What should the "Save" button show during these states: idle, submitting, success, error?**

Your answer:
```
[Write your explanation here]
```

### 6. Data Flow

**Q: Trace the flow from clicking "Save" to the success message appearing. Include all steps.**

Your answer:
```
[Write your explanation here]
```

**Q: What happens to the Apollo cache after you update the user? Does the `me` query update automatically?**

Your answer:
```
[Write your explanation here]
```

### 7. TypeScript & Type Safety

**Q: How does Zod help with TypeScript types? Give an example from your code.**

Your answer:
```
[Write your explanation here]
```

**Q: What type errors would you get without proper typing on the form state?**

Your answer:
```
[Write your explanation here]
```

---

## 🎓 Trainer Review

**Trainer Name:** _______________
**Review Date:** _______________

**Code Review Checklist:**
- [ ] Zod validation schema is correct
- [ ] All form fields validate properly
- [ ] Form populates with user data on load
- [ ] Save mutation works correctly
- [ ] Cancel/Reset functionality works
- [ ] Loading states are shown
- [ ] Success messages display
- [ ] Error messages are user-friendly
- [ ] Form is disabled during save
- [ ] Read-only org info displayed
- [ ] Code is clean and well-organized
- [ ] TypeScript types are proper
- [ ] No console errors

**Quiz Review:**
- [ ] Understands Zod and schema validation
- [ ] Explains controlled components correctly
- [ ] Knows form state management patterns
- [ ] Understands UX best practices
- [ ] Can trace data flow through the app

**Feedback:**
```
[Trainer feedback here]
```

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Needs Revision | ⬜ Completed

---

**Previous Exercise:** [Exercise 03 - Analytics](./EXERCISE-03-ANALYTICS.md)

**🎉 Congratulations!** You've completed all exercises. You now have solid understanding of:
- GraphQL queries and mutations
- Apollo Client and React Query
- Form validation and error handling
- Role-based access control
- Data visualization
- Professional UX patterns

## Next Steps:
1. Review all quizzes with your trainer
2. Discuss code improvements
3. Plan your next learning goals
