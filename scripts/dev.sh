#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if docker is running
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}error${NC} This script uses docker, and it isn't running - please start docker and try again!"
  exit 1
fi

# Run dev
npx lerna run compile 
npx lerna run dev
