#!/bin/bash

echo "RUNNING V4..."

echo "Cleaning steps"
rm features/web/step_definitions/step*
echo "Set up steps for v4"
cp vrt/kraken-steps/step_v4.js features/web/step_definitions/

echo "Cleaning features"
rm features/*.feature
echo "Set up features for v4"
cp vrt/features-v4/*.feature features/

echo "Running tests for v4"
npx kraken-node run

echo "Cleaning kraken space"
rm features/*.feature
rm features/web/step_definitions/step*

echo "RUNNING V5..."

echo "Cleaning steps"
rm features/web/step_definitions/step*
echo "Set up steps for v5"
cp vrt/kraken-steps/step_v5.js features/web/step_definitions/

echo "Cleaning features"
rm features/*.feature
echo "Set up features for v5"
cp vrt/features-v5/*.feature features/

echo "Running tests for v5"
npx kraken-node run

echo "Cleaning kraken space"
rm features/*.feature
rm features/web/step_definitions/step*

echo "Running Resemble..."
cd vrt npm i
mkdir resemble-report
node resemble.js

echo "Created report inside vrt/resemble-report folder"