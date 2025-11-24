Guide the deployment workflow following strict environment rules and permission requirements. ALWAYS require explicit user permission before pushing to staging or main branches.

# Deploy Command

## Critical Rules

**BEFORE ANY DEPLOYMENT:**

1. ALWAYS require explicit user permission before pushing to `staging` or `main`
2. Reference `docs/architecture/environment-architecture.md` for deployment rules
3. Never push to staging/main without showing what will be deployed first

## Deployment Workflow

### Step 1: Verify Current State

```bash
# Check current branch
git branch --show-current

# Check git status (should be clean)
git status

# Show uncommitted changes (should be none)
git diff
```

**Requirements:**

- Must be on `develop` branch
- No uncommitted changes
- All changes committed and tested locally

### Step 2: Ask User Which Environment

Present options to user:

- **Staging** (Preview deployment) - Deploys to Vercel preview, uses nrml-test database
- **Production** (Live deployment) - Deploys to production, uses nrml-prod database
- **Cancel** - Stop deployment

### Step 3: Show What Will Be Deployed

```bash
# For staging deployment:
git log origin/staging..develop --oneline
git diff origin/staging...develop

# For production deployment:
git log origin/main..develop --oneline
git diff origin/main...develop
```

**Show user:**

- List of commits that will be deployed
- Files that have changed
- Summary of what's new/changed

### Step 4: Get Explicit Permission

**DO NOT PROCEED WITHOUT CLEAR PERMISSION**

Ask user:

> "Ready to deploy to [STAGING/PRODUCTION]? This will:
>
> - Merge `develop` → `[staging/main]`
> - Push to GitHub
> - Trigger automatic Vercel deployment
> - Use [nrml-test/nrml-prod] database
>
> Type 'yes' to proceed or 'no' to cancel."

### Step 5: Execute Deployment (Only if Approved)

#### For Staging:

```bash
# Switch to staging branch
git checkout staging

# Merge develop into staging
git merge develop --no-edit

# Push to GitHub (triggers Vercel preview deployment)
git push origin staging

# Switch back to develop
git checkout develop
```

#### For Production:

```bash
# Switch to main branch
git checkout main

# Merge develop into main
git merge develop --no-edit

# Push to GitHub (triggers Vercel production deployment)
git push origin main

# Switch back to develop
git checkout develop
```

### Step 6: Confirm Deployment

After successful push, inform user:

- Branch pushed successfully
- Vercel deployment triggered
- Provide Vercel dashboard link if available
- Remind user to verify deployment in Vercel

## Safety Checks

### Before Staging Deployment

- [ ] On develop branch
- [ ] No uncommitted changes
- [ ] Changes tested locally on localhost:3000
- [ ] User has explicitly approved staging deployment

### Before Production Deployment

- [ ] On develop branch
- [ ] No uncommitted changes
- [ ] Changes tested on staging environment
- [ ] User has explicitly approved production deployment
- [ ] No breaking changes or database migrations without plan

## Common Scenarios

### Scenario 1: User wants to deploy latest changes to staging

1. Verify on develop branch
2. Show commits: `git log origin/staging..develop`
3. Get permission
4. Merge develop → staging
5. Push staging

### Scenario 2: User wants to promote staging to production

1. Verify staging has been tested
2. Show commits: `git log origin/main..develop`
3. Get permission
4. Merge develop → main (or staging → main)
5. Push main

### Scenario 3: User says "deploy" without specifying environment

1. Ask which environment (staging or production)
2. Follow normal workflow

## Error Handling

### If merge conflicts occur:

1. Inform user of conflicts
2. Show conflicting files
3. Ask user to resolve manually
4. Abort deployment

### If push fails:

1. Show error message
2. Check if remote is ahead
3. Suggest git pull or force push (with caution)

## Environment Reference

| Environment | Branch    | Supabase DB   | Vercel                   |
| ----------- | --------- | ------------- | ------------------------ |
| Development | `develop` | consilio-dev  | localhost:3000           |
| Staging     | `staging` | consilio-test | Preview URL              |
| Production  | `main`    | consilio-prod | consilio-sage.vercel.app |

## Related Documentation

- Full deployment rules: `docs/architecture/environment-architecture.md`
- Git workflow: See "Workflow Summary" section in environment-architecture.md
- Environment variables: Check `.env.development`, `.env.test`, `.env.production`
