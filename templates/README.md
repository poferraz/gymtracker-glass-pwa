# YAML Template Guide

This directory contains YAML templates for planning and documenting development work using the "vibe coding" approach.

## Philosophy

These templates serve as an intermediate layer between requirements and implementation. They allow you to:
- Plan features thoroughly before coding
- Iterate on design without writing code
- Generate multiple implementation options using AI
- Maintain professional documentation alongside rapid development

## Templates Overview

### 1. feature-spec.yaml
**When to use**: Planning new features or major functionality
**Key sections**: User story, components, data flow, interactions, edge cases

### 2. component-spec.yaml  
**When to use**: Designing reusable UI components
**Key sections**: Props interface, glass design properties, variants, accessibility

### 3. refactor-plan.yaml
**When to use**: Before refactoring existing code
**Key sections**: Current issues, desired state, step-by-step approach, risks

### 4. bug-fix.yaml
**When to use**: Documenting and fixing bugs systematically
**Key sections**: Reproduction steps, root cause, solution, prevention

### 5. integration-spec.yaml
**When to use**: Integrating external services or complex system connections
**Key sections**: Data flow, error handling, caching, offline behavior

## Workflow

### Planning Phase
1. Copy appropriate template to `planning/` directory
2. Fill in YAML specification with your requirements
3. Review and refine the specification
4. Use spec to guide AI code generation or manual implementation

### Implementation Phase
1. Reference YAML spec during development
2. Update spec if approach changes
3. Commit spec alongside code

### Documentation Phase
1. Specs serve as living documentation
2. Update as features evolve
3. Reference in requirements.md and CHANGELOG.md

## Example Workflow

```bash
# Planning a new feature
cp templates/feature-spec.yaml planning/session-timer.yaml
# Edit session-timer.yaml with your requirements
# Generate code from spec using AI or implement manually
# Commit both spec and implementation

git add planning/session-timer.yaml src/components/SessionTimer.jsx
git commit -m "feat: Add session timer feature"
```

## Best Practices

### DO:
✅ Fill in specs before coding
✅ Keep specs updated as requirements change
✅ Use specs to communicate with AI tools
✅ Reference specs in PR descriptions
✅ Store completed specs for future reference

### DON'T:
❌ Skip specs for "quick fixes" (use bug-fix.yaml)
❌ Let specs become outdated
❌ Over-specify implementation details
❌ Ignore edge cases and error handling
❌ Forget to commit specs with code

## Integration with Git Workflow

Specs should be committed alongside their implementations:

```
feat: Add workout timer feature

Implemented according to spec in planning/session-timer.yaml

- Glass-styled timer component
- Countdown with visual feedback
- Audio notifications
- Pause/resume functionality

Closes #23
```

## Tips for AI-Assisted Development

When using these specs with AI tools:

1. **Be specific** in the YAML fields
2. **Include examples** of desired behavior
3. **Specify constraints** (performance, accessibility)
4. **List edge cases** to handle
5. **Request multiple options** for complex decisions
6. **Iterate on the spec** before generating code

## Customization

Feel free to:
- Add custom fields relevant to your project
- Create new templates for recurring patterns
- Simplify templates for your workflow
- Extend templates with project-specific needs

---

Remember: These templates enable "vibe coding" while maintaining professional standards. They're tools to help you think clearly and communicate effectively, not bureaucratic overhead.
