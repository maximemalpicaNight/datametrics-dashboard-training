# Exercise 02: Team Management & CRUD Operations

## 📖 Required Reading & Learning Resources

**⚠️ IMPORTANT: Complete these learning materials BEFORE starting to code!**

Build on Exercise 01 knowledge and learn mutations, CRUD, and security concepts.

### 1. GraphQL Mutations (45-60 min)
**Why:** Mutations modify data - different from queries. You need to understand when and how to use them.

- 📄 **[GraphQL Mutations Official Docs](https://graphql.org/learn/queries/#mutations)** (15 min) - Essential reading
- 📺 **[GraphQL Mutations Explained](https://www.youtube.com/watch?v=H-kj-VO6tEs)** (20 min)
- 📄 **[Apollo useMutation Hook](https://www.apollographql.com/docs/react/data/mutations/)** (20 min) - Official docs with examples

**Key Concepts to Understand:**
- Query vs Mutation - when to use each?
- How to pass variables to mutations?
- What is returned from a mutation?
- How to handle mutation errors?

### 2. CRUD Operations & REST vs GraphQL (30-40 min)
**Why:** CRUD is fundamental to all applications. Understand the pattern.

- 📄 **[CRUD Operations Explained](https://www.codecademy.com/article/what-is-crud)** (10 min)
- 📺 **[CRUD in GraphQL](https://www.youtube.com/watch?v=W4RkJ8Vdocc)** (20 min)
- 📄 **[Apollo Cache Updates](https://www.apollographql.com/docs/react/caching/cache-interaction/)** (15 min) - How cache works after mutations

**Key Concepts to Understand:**
- What does CRUD stand for?
- How do you update Apollo cache after mutations?
- What is `refetchQueries` and when to use it?

### 3. Role-Based Access Control (RBAC) (40-50 min)
**Why:** Security is critical. You must understand authorization patterns.

- 📄 **[RBAC Fundamentals](https://auth0.com/docs/manage-users/access-control/rbac)** (15 min) - Industry standard explanation
- 📺 **[Authorization vs Authentication](https://www.youtube.com/watch?v=I0poT4UxFxE)** (10 min) - Understand the difference
- 📄 **[Client-Side vs Server-Side Auth](https://kentcdodds.com/blog/authentication-in-react-applications)** (20 min) - Kent C. Dodds blog
- 🛠️ **Think About:** Why hiding UI buttons isn't enough for security?

**Key Concepts to Understand:**
- Authentication vs Authorization - what's the difference?
- What are roles and permissions?
- Why must authorization happen on the server?
- How to implement role-based UI in React?

### 4. Form Handling in React (35-45 min)
**Why:** Forms are everywhere. Master controlled components.

- 📄 **[React Forms](https://react.dev/reference/react-dom/components/input)** (15 min) - Official React docs
- 📺 **[Controlled vs Uncontrolled Inputs](https://www.youtube.com/watch?v=IkMND33x0qQ)** (15 min)
- 📄 **[Form Validation Best Practices](https://www.smashingmagazine.com/2022/01/designing-better-inline-validation-ux/)** (10 min) - UX patterns

**Key Concepts to Understand:**
- What is a controlled component?
- How to manage form state with useState?
- When to validate: onChange vs onBlur vs onSubmit?

### 5. User Experience Patterns (25-35 min)
**Why:** Good UX separates junior from senior developers.

- 📄 **[Loading States Best Practices](https://uxdesign.cc/design-better-loading-states-fc9b98d51e4f)** (10 min)
- 📄 **[Confirmation Dialogs](https://www.nngroup.com/articles/confirmation-dialog/)** (10 min) - Nielsen Norman Group
- 📺 **[Error Handling in UI](https://www.youtube.com/watch?v=Fgd2Ihq0LRc)** (15 min)

**Key Concepts to Understand:**
- When to show confirmation dialogs?
- How to display errors without frustrating users?
- Why disable buttons during loading?

### 6. Apollo Cache Management (30-40 min)
**Why:** Efficient cache management = fast, responsive apps.

- 📄 **[Apollo Cache Overview](https://www.apollographql.com/docs/react/caching/overview/)** (15 min)
- 📺 **[Apollo Cache Deep Dive](https://www.youtube.com/watch?v=kq6gM9hdyHE)** (20 min)
- 📄 **[refetchQueries vs Cache Updates](https://www.apollographql.com/docs/react/data/mutations/#refetching-queries)** (10 min)

**Key Concepts to Understand:**
- How does Apollo cache work?
- When to use `refetchQueries` vs manual cache updates?
- What is optimistic UI?

---

### ✅ Self-Check Before Starting

Answer these questions to verify your understanding:

1. What is the difference between a query and a mutation?
2. What does CRUD stand for and what are the 4 operations?
3. Why isn't hiding admin buttons enough for security?
4. What is a controlled component in React?
5. When should you show a confirmation dialog?
6. What does `refetchQueries` do in a mutation?

If you can't answer these confidently, **review the materials above**. Security and UX are critical - don't skip the learning.

---

## 📚 Learning Objectives

By completing this exercise, you will learn:

- **GraphQL Mutations** - How to modify data using Apollo Client's `useMutation` hook
- **CRUD Operations** - Create, Read, Update, Delete patterns
- **Role-Based Access Control (RBAC)** - Show/hide features based on user permissions
- **Form Handling** - Build forms with controlled inputs and validation
- **Optimistic Updates** - Update UI before server confirms changes
- **Confirmation Dialogs** - UX pattern for destructive actions
- **Apollo Cache Management** - Update cache after mutations
- **Error Handling** - Display user-friendly error messages from mutations

## 🎯 Goal

Build a team management page where administrators can view all team members and perform CRUD operations (add, edit, delete). Non-admin users should only see the list without modification capabilities. This teaches you how to build admin features with proper authorization.

## 🛠️ Technologies & Concepts Used

- **Apollo Client Mutations** - Data modification with `useMutation`
- **React Hook Form** (optional) or controlled inputs
- **Zod Validation** - Form validation schemas
- **GraphQL** - Mutations for add/update/delete
- **RBAC** - Conditional rendering based on user role
- **TypeScript** - Type-safe forms and data
- **Tailwind CSS** - Modal dialogs and form styling

## 📋 Requirements

### 1. Team Members List/Table
Display all team members with:
- Avatar (or initials)
- Name
- Email
- Role (ADMIN, MEMBER, VIEWER)
- Permissions JSON displayed nicely
- Action buttons (Edit, Delete) - only for ADMINS

### 2. Add Team Member (ADMIN Only)
- Button: "Add Team Member"
- Modal/Form with fields:
  - Email (existing user email)
  - Role (dropdown: ADMIN, MEMBER, VIEWER)
- Auto-generate permissions based on role
- Validate email format
- Show success/error message
- Refresh list after adding

### 3. Edit Team Member (ADMIN Only)
- Click "Edit" button on a team member
- Modal/Form pre-filled with current data
- Allow changing role
- Allow editing permissions (JSON or checkboxes)
- Update team member
- Show success/error message

### 4. Delete Team Member (ADMIN Only)
- Click "Delete" button on a team member
- Show confirmation dialog: "Are you sure you want to remove [Name] from the team?"
- If confirmed, delete team member
- Show success message
- Remove from list immediately

### 5. Role-Based UI
- If user is VIEWER or MEMBER → Show list only (no action buttons)
- If user is ADMIN → Show list + Add/Edit/Delete buttons
- Display current user's role somewhere on the page

### 6. Loading & Error States
- Show loading spinner while fetching team members
- Show loading state on buttons during mutations
- Display error messages if mutations fail
- Don't close modal if mutation fails

## ✅ Definition of Done

Check off each item when complete:

- [ ] Team members list displays all users with correct data
- [ ] Add Team Member form works (ADMIN only)
- [ ] Edit Team Member form works with pre-filled data (ADMIN only)
- [ ] Delete Team Member shows confirmation and removes user (ADMIN only)
- [ ] Non-admin users cannot see Add/Edit/Delete buttons
- [ ] Form validation works (email format, required fields)
- [ ] Success messages appear after successful mutations
- [ ] Error messages show if mutations fail
- [ ] Loading states show during API calls
- [ ] Apollo cache updates automatically after mutations
- [ ] No console errors or TypeScript errors
- [ ] Page is responsive on mobile and desktop

## 💡 Hints & Resources

### GraphQL Queries & Mutations

```typescript
import { gql, useQuery, useMutation } from '@apollo/client';

// Query to fetch team members
const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($organizationId: ID!) {
    teamMembers(organizationId: $organizationId) {
      id
      userId
      role
      permissions
      joinedAt
      user {
        id
        name
        email
        avatar
        role
      }
    }
  }
`;

// Mutation to add team member
const ADD_TEAM_MEMBER = gql`
  mutation AddTeamMember($email: String!, $role: String!, $organizationId: ID!) {
    addTeamMember(email: $email, role: $role, organizationId: $organizationId) {
      id
      userId
      role
      permissions
      user {
        id
        name
        email
        avatar
      }
    }
  }
`;

// Mutation to update team member
const UPDATE_TEAM_MEMBER = gql`
  mutation UpdateTeamMember($id: ID!, $role: String, $permissions: JSON) {
    updateTeamMember(id: $id, role: $role, permissions: $permissions) {
      id
      role
      permissions
    }
  }
`;

// Mutation to delete team member
const DELETE_TEAM_MEMBER = gql`
  mutation DeleteTeamMember($id: ID!) {
    deleteTeamMember(id: $id)
  }
`;
```

### Using Mutations

```typescript
const [addTeamMember, { loading: addLoading, error: addError }] = useMutation(
  ADD_TEAM_MEMBER,
  {
    // Refetch the team members list after adding
    refetchQueries: [{ query: GET_TEAM_MEMBERS, variables: { organizationId } }],
    onCompleted: () => {
      alert('Team member added successfully!');
      closeModal();
    },
    onError: (error) => {
      console.error('Error adding team member:', error);
    },
  }
);

// Call the mutation
const handleSubmit = (e) => {
  e.preventDefault();
  addTeamMember({
    variables: {
      email: formData.email,
      role: formData.role,
      organizationId,
    },
  });
};
```

### Checking User Role

```typescript
// Get current user from localStorage
const userData = localStorage.getItem('user');
const currentUser = userData ? JSON.parse(userData) : null;
const isAdmin = currentUser?.role === 'ADMIN';

// Conditional rendering
{isAdmin && (
  <button onClick={() => setShowAddModal(true)}>
    Add Team Member
  </button>
)}
```

### Confirmation Dialog

```typescript
const handleDelete = (teamMember: TeamMember) => {
  const confirmed = window.confirm(
    `Are you sure you want to remove ${teamMember.user.name} from the team?`
  );

  if (confirmed) {
    deleteTeamMember({
      variables: { id: teamMember.id },
    });
  }
};
```

### Form Validation with Zod

```typescript
import { z } from 'zod';

const teamMemberSchema = z.object({
  email: z.string().email('Invalid email format'),
  role: z.enum(['ADMIN', 'MEMBER', 'VIEWER'], {
    errorMap: () => ({ message: 'Please select a role' }),
  }),
});

// Validate before submitting
try {
  teamMemberSchema.parse(formData);
  // Validation passed, submit form
} catch (error) {
  if (error instanceof z.ZodError) {
    // Show validation errors
    console.error(error.errors);
  }
}
```

### Permissions JSON Example

```typescript
// Auto-generate permissions based on role
const generatePermissions = (role: string) => {
  return JSON.stringify({
    canEdit: role !== 'VIEWER',
    canDelete: role === 'ADMIN',
    canInvite: role === 'ADMIN' || role === 'MEMBER',
  });
};
```

### Displaying Permissions

```typescript
const permissions = JSON.parse(teamMember.permissions);

<div className="flex gap-2">
  {permissions.canEdit && <span className="badge">Can Edit</span>}
  {permissions.canDelete && <span className="badge">Can Delete</span>}
  {permissions.canInvite && <span className="badge">Can Invite</span>}
</div>
```

## 🚫 Common Pitfalls

1. **Not refetching after mutations** - List won't update automatically
2. **Forgetting to check user role** - Non-admins might see admin buttons
3. **No confirmation for delete** - Accidental deletes are bad UX
4. **Not handling mutation errors** - Users won't know if something failed
5. **Closing modal before mutation completes** - Use `loading` state
6. **Not validating email format** - API might reject invalid emails
7. **Hardcoding organizationId** - Always get from logged-in user
8. **Not showing loading state on buttons** - Users might click multiple times
9. **Displaying raw JSON** - Parse permissions and show nicely
10. **Not updating Apollo cache** - Use `refetchQueries` or manual cache update

## 🧪 How to Test

### Manual Testing Steps:

#### As Admin User (admin@acme.com):
1. **Login** as admin@acme.com / password123
2. **View list** - See all 5 team members
3. **Check buttons** - Should see "Add Team Member", "Edit", "Delete" on each row
4. **Add member** - Click "Add", enter existing user email (e.g., john@acme.com), select role, submit
5. **Check success** - New member should appear in list
6. **Edit member** - Click "Edit" on a member, change role, submit
7. **Check update** - Role should update in list
8. **Delete member** - Click "Delete", confirm, member should disappear
9. **Check errors** - Try adding with invalid email, should show error

#### As Non-Admin User (john@acme.com):
1. **Logout** and login as john@acme.com / password123
2. **View list** - Should see all team members
3. **Check buttons** - Should NOT see "Add", "Edit", or "Delete" buttons
4. **Try direct access** - Verify you can't trigger mutations via console

#### Edge Cases:
1. **Delete yourself** - What happens if admin tries to delete their own team member record?
2. **Add duplicate** - Try adding email that's already a team member
3. **Network error** - Turn off internet, try mutation, check error handling
4. **Empty fields** - Submit form with empty email, check validation

## 📝 Validation Quiz

After completing this exercise, answer these questions **in your own words**:

### 1. GraphQL Mutations

**Q: What is the difference between a GraphQL query and a mutation?**

Your answer:
```
[Write your explanation here]
```

**Q: Explain the structure of the object returned by `useMutation`. What are the key properties?**

Your answer:
```
[Write your explanation here]
```

**Q: What is the purpose of `refetchQueries` in mutation options? Why do we need it?**

Your answer:
```
[Write your explanation here]
```

### 2. CRUD Operations

**Q: What does CRUD stand for? Give an example of each operation from this exercise.**

Your answer:
```
[Write your explanation here]
```

**Q: Why is it important to show a confirmation dialog before deleting data?**

Your answer:
```
[Write your explanation here]
```

### 3. Role-Based Access Control

**Q: How did you implement role-based UI? Explain the approach you used.**

Your answer:
```
[Write your explanation here]
```

**Q: What security risk exists if you only hide UI buttons based on role (client-side)? How is this mitigated?**

Your answer:
```
[Write your explanation here]
```

### 4. Form Handling & Validation

**Q: Why is form validation important? What could go wrong without it?**

Your answer:
```
[Write your explanation here]
```

**Q: Compare client-side validation (Zod) vs server-side validation. When do you need both?**

Your answer:
```
[Write your explanation here]
```

### 5. Apollo Cache & State Management

**Q: What happens to the Apollo cache after a mutation? How does the UI update?**

Your answer:
```
[Write your explanation here]
```

**Q: Explain the difference between using `refetchQueries` vs manually updating the cache after a mutation.**

Your answer:
```
[Write your explanation here]
```

### 6. Error Handling

**Q: What types of errors can occur during a mutation? Give 3 examples.**

Your answer:
```
[Write your explanation here]
```

**Q: How did you handle and display errors to the user in your implementation?**

Your answer:
```
[Write your explanation here]
```

### 7. UX & Loading States

**Q: Why should you disable the submit button while a mutation is loading?**

Your answer:
```
[Write your explanation here]
```

**Q: What should happen if a mutation fails? Should you close the modal/form? Why or why not?**

Your answer:
```
[Write your explanation here]
```

---

## 🎓 Trainer Review

**Trainer Name:** _______________
**Review Date:** _______________

**Code Review Checklist:**
- [ ] All CRUD operations work correctly
- [ ] Role-based access control implemented
- [ ] Form validation is working
- [ ] Confirmation dialogs shown for destructive actions
- [ ] Error handling is comprehensive
- [ ] Loading states are shown
- [ ] Apollo cache updates correctly
- [ ] Code is clean and well-organized
- [ ] TypeScript types are proper
- [ ] No console errors

**Quiz Review:**
- [ ] Understands mutations vs queries
- [ ] Explains CRUD operations correctly
- [ ] Understands RBAC security implications
- [ ] Knows why validation is important
- [ ] Understands Apollo cache behavior

**Feedback:**
```
[Trainer feedback here]
```

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Needs Revision | ⬜ Completed

---

**Previous Exercise:** [Exercise 01 - Dashboard](./EXERCISE-01-DASHBOARD.md)
**Next Exercise:** [Exercise 03 - Analytics](./EXERCISE-03-ANALYTICS.md)
