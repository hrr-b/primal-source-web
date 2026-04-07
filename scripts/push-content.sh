#!/bin/bash
# Primal Source — Autonomous Content Push Script
# Usage: ./scripts/push-content.sh "optional commit message"
# Agents call this after updating any /content/*.json file

REPO_DIR="/root/.openclaw/workspace-builder/primal-source-web"
MESSAGE="${1:-AI content update — $(date '+%Y-%m-%d %H:%M')}"

cd "$REPO_DIR" || exit 1

# Check if there are changes
if git diff --quiet && git diff --cached --quiet; then
  echo "✅ No content changes to push."
  exit 0
fi

git add content/
git commit -m "$MESSAGE"
git push origin main

echo "🚀 Content pushed — Vercel deploying now."
