#!/bin/bash

echo "RUNNING E2E testing..."

echo "Cleaning steps"
rm features/web/step_definitions/step*
echo "Set up steps for e2e testing"
cp e2e/kraken-steps/step.js features/web/step_definitions/

echo "Cleaning features"
rm features/*.feature
echo "Set up features for e2e testing"
cp e2e/features/*.feature features/

echo "Running tests for e2e testing"
npx kraken-node run

echo "Cleaning kraken space"
rm features/*.feature
rm features/web/step_definitions/step*