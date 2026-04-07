#!/bin/bash
# Primal Source — Autonomous Content Loop
# Runs the Scout → Closer → Analyst → Publisher chain
# Usage: ./scripts/content-loop.sh [manual|scheduled]

REPO_DIR="/root/.openclaw/workspace-builder/primal-source-web"
CONTENT_DIR="$REPO_DIR/content"
HISTORY_DIR="$CONTENT_DIR/history"
MODE="${1:-manual}"
TIMESTAMP=$(date +%Y%m%d_%H%M)

echo "🔄 Primal Source Content Loop — $MODE run at $TIMESTAMP"

# Step 1: Version current content before overwriting
echo "📦 Archiving current version..."
for f in homepage products email; do
  if [ -f "$CONTENT_DIR/${f}.json" ]; then
    cp "$CONTENT_DIR/${f}.json" "$HISTORY_DIR/${f}_${TIMESTAMP}.json"
    echo "  Archived: ${f}.json → history/${f}_${TIMESTAMP}.json"
  fi
done

# Step 2: Signal OpenClaw agents to generate new content
# Agents write updated JSON to /content/*.json
# This script is called AFTER agents have written their outputs

# Step 3: Push to GitHub → Vercel auto-deploys
echo "🚀 Pushing content to GitHub..."
cd "$REPO_DIR"
git add content/
git commit -m "AI content loop — $TIMESTAMP [$MODE]" 2>/dev/null || echo "Nothing new to commit"
git push origin main

echo "✅ Content loop complete. Vercel deploying..."
echo "🌐 Live at: https://primal-source-web.vercel.app"
