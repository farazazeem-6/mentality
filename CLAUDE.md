## 1. Architecture & Project Structure
- Follow a professional, scalable, production-grade folder
structure.
- Organize code by responsibility and, where appropriate, by
feature/domain.
- Keep related files close together.
- Avoid dumping unrelated code into generic folders.
- Do not create unnecessary abstraction layers.
- Every file and folder should have a clear responsibility.
- Prefer feature-based organization for large applications.
- Keep UI, business logic, data access, utilities, and configuration
separated.
## 2. Imports
- Use the `@` path alias for internal imports.
- Never use `../` or `../../` for internal project imports.
- Keep imports consistent throughout the project.
- Remove unused imports immediately.
- Avoid circular dependencies.
- Prefer importing from the intended public API of a module
instead of reaching into its internal files.
## 3. Naming Conventions
- Use descriptive names that communicate intent.
- Components should use `PascalCase`.
- Hooks should use `useSomething`.
- Constants should use `UPPER_SNAKE_CASE` when they are
true constants.- Utility/helper files should have clear domain-specific names.
- Boolean variables should communicate boolean meaning:
- `isLoading`
- `hasPermission`
- `canEdit`
- `shouldFetch`
- Avoid meaningless names such as:
- `data`
- `item`
- `obj`
- `temp`
- `foo`
- `test`
unless their meaning is genuinely obvious from context.
- Event handlers should use names such as:
- `handleSubmit`
- `handleChange`
- `handleDelete`
- Keep naming consistent across the entire project.
## 4. Constants & Strings
- Do not hardcode repeated strings.
- Store reusable/static strings in dedicated constant files.
- Avoid magic numbers and magic strings when they have
semantic meaning.
- Group constants by feature/domain.
- Do not create constants for values that are used only once and
gain no readability from extraction.
## 5. Types & Enums- Keep reusable TypeScript types/interfaces in dedicated type
files.
- Keep enums in dedicated enum files.
- Do not define large reusable types directly inside UI
components.
- Prefer precise types over `any`.
- Avoid `any` unless there is a documented technical reason.
- Do not use `as any` to bypass TypeScript errors.
- Do not use excessive type assertions to silence compiler errors.
- Model API responses explicitly.
- Model component props explicitly.
- Model form values explicitly.
- Model important state explicitly.
- Use discriminated unions when multiple states have different
valid shapes.
- Prefer union types over enums when an enum provides no
additional value.
## 6. Components
- Reusable components belong in the `components` folder.
- Before creating a component, check whether an existing
component can be reused.
- Components should have a single clear responsibility.
- Avoid giant components.
- If a component becomes difficult to understand, split it into
smaller components.
- Do not create abstractions merely because two pieces of UI look
similar; abstract when behavior or responsibility is genuinely
shared.
- Keep component APIs small and predictable.- Avoid passing large unnecessary objects through props.
- Do not expose internal implementation details through
component props.
## 7. UI / Logic Separation
- UI files should primarily contain presentation/rendering code.
- Do not put API calls directly inside presentational components.
- Do not put large business rules inside JSX.
- Do not put reusable calculations inside UI files.
- Do not put reusable validation logic inside UI files.
- Extract reusable stateful logic into hooks.
- Extract reusable pure logic into helpers/utilities.
- Extract API/data-access logic into services or query hooks.
- Keep JSX declarative and easy to scan.
## 8. JSX Rules
- Avoid deeply nested JSX.
- Do not put complex expressions directly inside JSX.
- Move complex conditions/calculations into named variables,
helpers, or components.
- Avoid large inline object definitions when they are recreated
unnecessarily.
- Avoid large inline callback functions when extraction improves
readability or performance.
- Use early returns when they make conditional rendering clearer.
- Do not abuse ternary operators for complicated UI logic.
- Never use nested ternaries when a clearer approach exists.
- Keep JSX focused on describing the UI rather than
implementing business logic.## 9. Styling
- Each UI component should have its own dedicated style file
when styling is required.
- Keep component-specific styles colocated with the component.
- Do not unnecessarily modify global styles.
- Avoid excessive inline styles.
- Use the project's existing design system consistently.
- Reuse existing spacing, typography, colors, shadows,
breakpoints, and components.
- Do not create slightly different versions of existing design
tokens.
- Avoid arbitrary pixel values when existing design tokens or
responsive units can be used.
- Ensure styles work across supported screen sizes.
## 10. Responsive Design
- Every UI must be responsive.
- Do not design only for the developer's current screen.
- Consider mobile, tablet, laptop, desktop, and large displays.
- Avoid fixed widths/heights that can break layouts.
- Handle long text, large datasets, empty states, and small
screens.
- Do not rely on horizontal scrolling unless it is intentional.
- Test important layouts at multiple breakpoints.
- Responsive behavior should be designed intentionally rather
than patched at the end.
## 11. Hooks
- Reusable stateful or side-effect logic must be extracted into
custom hooks.- Hooks must have a clear responsibility.
- Do not create hooks simply to move arbitrary code somewhere
else.
- Do not put unrelated functionality into a single giant hook.
- Follow React hook rules strictly.
- Keep effects minimal.
- Do not use `useEffect` when derived state or direct computation
is sufficient.
- Avoid using `useEffect` as a replacement for normal function
calls.
- Clean up subscriptions, timers, listeners, and other resources
inside effects.
- Ensure effect dependency arrays are correct.
- Never intentionally suppress hook dependency warnings without
a strong technical reason.
## 12. State Management
- Keep state as local as possible.
- Do not put component-local state into global state without a real
reason.
- Do not duplicate the same source of truth in multiple places.
- Prefer derived values over duplicated state.
- Avoid storing values that can be calculated from existing state.
- Separate server state from client/UI state.
- Use the project's established server-state solution consistently.
- Do not manually recreate functionality already provided by the
state-management/data-fetching library.
- Keep global state minimal.
## 13. API & Data Access- UI components should not directly contain raw API
implementation.
- Centralize API clients/configuration.
- Centralize authentication/token handling.
- Keep API endpoints and request logic organized by feature.
- Type API requests and responses.
- Handle loading, success, empty, and error states.
- Do not assume API data is always valid.
- Normalize/transform API data at the appropriate boundary rather
than repeatedly transforming it throughout the UI.
- Do not duplicate the same API request logic in multiple
components.
- Avoid unnecessary API calls.
- Prevent duplicate requests where the application's data-fetching
architecture supports deduplication.
- Do not expose secrets or private credentials in frontend code.
## 14. Error Handling
- Every asynchronous operation must have intentional error
handling.
- Do not silently swallow errors.
- Never leave empty `catch {}` blocks without a valid reason.
- Show meaningful user-facing error states where appropriate.
- Log/debug errors at the correct boundary without exposing
sensitive information.
- Distinguish between:
- network errors
- validation errors
- authentication errors
- authorization errors- server errors
- unexpected application errors
- Do not display raw backend error objects directly to users.
- Provide useful fallback UI for unexpected failures.
## 15. Loading & Empty States
- Every data-driven UI should consider:
- loading state
- success state
- empty state
- error state
- Avoid blank screens while data is loading.
- Avoid showing loading indicators unnecessarily for extremely
fast operations.
- Use skeletons/placeholders where appropriate.
- Empty states should explain what happened and, when useful,
what the user can do next.
## 16. Forms & Validation
- Use the project's established form library consistently.
- Keep validation schemas separate from UI components when
they are reusable or complex.
- Do not duplicate validation rules between frontend fields.
- Validate user input before submitting.
- Never assume frontend validation is sufficient for security.
- Display field-level errors close to the relevant fields.
- Handle server-side validation errors.
- Prevent accidental duplicate submissions.
- Disable or otherwise protect submit actions while an operation is
in progress when appropriate.## 17. Accessibility
- Use semantic HTML whenever possible.
- Prefer `<button>` over clickable `<div>`.
- Prefer `<a>`/router links for navigation.
- Every meaningful image must have appropriate `alt` text.
- Decorative images should not create unnecessary
screen-reader content.
- Form controls must have accessible labels.
- Ensure keyboard navigation works.
- Do not rely solely on color to communicate state.
- Maintain sufficient visual contrast.
- Modals/dialogs must correctly manage focus.
- Interactive elements must have visible focus states.
- Do not use ARIA when native HTML already provides the
required semantics.
## 18. Performance
- Do not optimize blindly.
- Avoid premature memoization.
- Use `React.memo`, `useMemo`, and `useCallback` only when
there is a measurable or architectural reason.
- Avoid unnecessary re-renders.
- Keep state close to where it is consumed.
- Avoid rendering large lists without appropriate optimization.
- Use virtualization for genuinely large datasets when necessary.
- Lazy-load heavy components/routes when appropriate.
- Optimize images and avoid unnecessarily large assets.
- Avoid expensive calculations during every render.- Do not introduce memoization everywhere just because it is
technically possible.
## 19. React Rendering
- Understand that every state/prop/context update can trigger
rendering.
- Do not use unstable values as keys.
- Never use array indexes as keys when list ordering or identity
can change.
- Keys must represent stable item identity.
- Avoid unnecessary context updates.
- Do not put frequently changing state into a broad context if it
causes large parts of the application to rerender.
- Keep component trees reasonably granular.
## 20. Effects & Side Effects
- Side effects should have clear ownership.
- Do not use `useEffect` for simple derived values.
- Do not use effects to synchronize state unnecessarily.
- Cancel or ignore stale asynchronous operations where required.
- Clean up event listeners, intervals, observers, and subscriptions.
- Be careful with race conditions in asynchronous effects.
- Do not create effect chains where one state update triggers
another effect unnecessarily.
## 21. Security
- Never hardcode secrets, API keys, passwords, or private
tokens.
- Never trust frontend validation as a security boundary.- Never render unsanitized HTML unless there is a deliberate and
safe sanitization strategy.
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary.
- Do not store sensitive data in insecure client-side storage
without understanding the security implications.
- Do not expose internal backend implementation details to users.
- Treat all API responses and user-generated content as
untrusted input.
## 22. Routing
- Keep route definitions organized.
- Use route-level authentication/authorization consistently.
- Do not duplicate permission checks across unrelated
components.
- Handle invalid routes with a proper fallback.
- Preserve navigation state only when it is intentional.
- Avoid unnecessary full-page reloads in SPA-style applications.
## 23. Authentication & Authorization
- Authentication and authorization are separate concerns.
- Do not assume that hiding a UI element provides authorization.
- Frontend permission checks are for UX; backend authorization
remains mandatory.
- Centralize permission logic where possible.
- Handle expired sessions consistently.
- Do not duplicate authentication checks across every component.
## 24. Helpers & Utilities
- Reusable pure functions belong in helper/utility files.
- Keep utilities independent from UI code whenever possible.- Utilities should have one clear responsibility.
- Do not create a giant `utils.ts` containing unrelated functionality.
- Prefer domain-specific utility modules.
## 25. Services
- API clients and external integrations should be separated from
UI code.
- Services should not contain React-specific rendering logic.
- Keep external dependencies behind clean interfaces where
practical.
- Do not duplicate configuration for the same external service.
## 26. Reusability / DRY
- Follow DRY, but do not over-abstract.
- Reuse components when the behavior and responsibility are
genuinely shared.
- Reuse hooks for shared stateful behavior.
- Reuse helpers for shared pure logic.
- Reuse constants for shared values.
- Reuse API/service functions for shared data access.
- Never copy-paste substantial logic just to save a few minutes.
## 27. Dependency Discipline
- Do not install a package for functionality that can be
implemented simply with existing dependencies or native APIs.
- Before adding a dependency, check whether the project already
has an equivalent solution.
- Avoid multiple libraries solving the same problem.
- Keep dependencies up to date according to the project's
maintenance policy.- Remove unused dependencies.
- Do not introduce large libraries for trivial functionality.
## 28. Testing
- Test important business logic independently from UI.
- Test reusable components where behavior is non-trivial.
- Test critical user flows.
- Test edge cases, not only happy paths.
- Test loading, error, empty, and permission states.
- Do not write tests that merely duplicate implementation details.
- Prefer testing observable behavior over internal implementation.
- Keep tests deterministic.
- Avoid unnecessary mocking.
## 29. Git & Code Hygiene
- Do not commit generated files unless the project explicitly
requires them.
- Do not commit secrets or environment files containing secrets.
- Remove debug statements before completing a feature.
- Remove commented-out dead code.
- Do not leave temporary TODO implementations in production
code.
- Keep commits focused when working with Git.
- Do not mix unrelated refactors with feature changes unless
necessary.
## 30. Environment & Configuration
- Environment-specific configuration must be separated from
application logic.- Do not hardcode environment-specific URLs or configuration
values.
- Use environment variables through the project's established
configuration mechanism.
- Validate required configuration early.
- Never expose server-only secrets through client-side
environment variables.
## 31. Code Quality
- Prefer readable code over clever code.
- Functions should have one clear responsibility.
- Avoid deeply nested conditions.
- Use guard clauses where they improve readability.
- Avoid unnecessarily long functions.
- Avoid unnecessary abstraction.
- Avoid duplicated logic.
- Avoid dead code.
- Avoid commented-out code.
- Avoid unexplained magic numbers.
- Keep complexity proportional to the problem.
## 32. Async Code
- Handle promise rejection intentionally.
- Avoid unnecessary nested promises.
- Prefer `async/await` when it improves readability.
- Prevent race conditions when multiple requests can update the
same UI state.
- Avoid updating state after a component is no longer relevant to
the operation.
- Handle cancellation/abort signals where appropriate.- Do not fire asynchronous operations repeatedly because of
unstable dependencies.
## 33. Data Transformation
- Transform data at a clear architectural boundary.
- Do not repeat the same mapping/filtering/transformation logic in
multiple components.
- Keep expensive transformations outside render when
appropriate.
- Do not mutate API response objects directly.
- Prefer immutable transformations.
## 34. Immutability
- Do not mutate React state directly.
- Do not mutate props.
- Do not mutate shared objects unexpectedly.
- Use immutable updates for state.
- Be especially careful with nested objects and arrays.
- Understand that mutation can break change detection and
create difficult-to-debug rendering bugs.
## 35. UI States & UX
- Components must account for realistic states rather than only
the ideal state.
- Consider:
- loading
- empty
- error
- disabled
- partial data- long content
- slow network
- permission denied
- expired session
- Buttons should communicate their current state.
- Destructive actions should have appropriate confirmation UX
when necessary.
- Avoid surprising users with silent state changes.
## 36. Internationalization Readiness
- Do not scatter user-facing text throughout complex logic.
- Keep user-facing strings centralized where the project requires
localization.
- Avoid layouts that depend on fixed text widths.
- Assume translated text can be significantly longer than English
text.
- Do not concatenate sentences in a way that makes translation
difficult.
## 37. Architecture Before Implementation
Before writing new code:
1. Check existing components.
2. Check existing hooks.
3. Check existing helpers.
4. Check existing constants.
5. Check existing types/enums.
6. Check existing API/service functions.
7. Reuse existing infrastructure when appropriate.
8. Only create new abstractions when existing code cannot
reasonably support the requirement.## 38. No Unnecessary Changes
- Do not modify unrelated files.
- Do not refactor unrelated code while implementing a feature
unless required.
- Do not change existing behavior without a reason.
- Keep the scope of changes focused.
- Preserve existing conventions unless they are clearly harmful.
## 39. Generated / Default Code
- Remove default framework-generated code that is not being
used.
- Remove unused components, imports, styles, variables,
dependencies, comments, and configuration.
- Do not leave demo code in production features.
- Do not keep placeholder implementations after completing the
feature.
## 40. Final Verification
Before considering a feature complete:
- Verify TypeScript errors are resolved.
- Verify lint errors are resolved.
- Verify unused imports/code are removed.
- Verify responsive behavior.
- Verify loading/error/empty states.
- Verify accessibility basics.
- Verify API failure behavior.
- Verify permissions/authentication behavior.
- Verify no secrets are exposed.
- Verify reusable logic has not been duplicated.- Verify unnecessary memoization has not been introduced.
- Verify no unrelated files were modified.
- Verify the final implementation follows the project's architecture.
## 41. Core Principle
Write code as if another senior engineer will maintain it for the
next five years.
The goal is not to produce the fewest lines of code.
The goal is to produce code that is:
- maintainable
- predictable
- reusable
- testable
- type-safe
- accessible
- responsive
- performant
- secure
- easy to debug
- consistent with the architecture
Do not sacrifice architecture for speed unless there is a deliberate
and documented reason.