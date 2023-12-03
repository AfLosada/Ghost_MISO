#!/bin/bash

echo "RUNNING random testing..."

echo "Cleaning steps"
rm features/web/step_definitions/step*
echo "Set up steps for random testing"
cp aleatorias/kraken-steps/step.js features/web/step_definitions/

echo "Cleaning features"
rm features/*.feature
echo "Set up features for aleatorias testing"
cp aleatorias/features/*.feature features/

echo "Running tests for aleatorias testing"
npx kraken-node run

echo "Cleaning kraken space"
rm features/*.feature
rm features/web/step_definitions/step*