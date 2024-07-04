#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

backend_only=false

# Get flag
while getopts "b" opt; do
  case $opt in
    b) backend_only=true;;
    \?) echo "Invalid option: -$OPTARG";;
  esac
done

# Check if docker is running
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}error${NC} This script uses docker, and it isn't running - please start docker and try again!"
  exit 1
fi


# Run dev
if [ "$backend_only" = false ]; then
  concurrently 'lerna run dev --scope @thminggg/frontend' 'lerna run dev --scope @thminggg/db' 'nodemon --watch "packages/db/dist" --exec "lerna run dev:be --scope @thminggg/backend"'
else
  concurrently 'lerna run dev:be --scope @thminggg/db' 'nodemon --watch "packages/db/dist" --exec "lerna run dev:be --scope @thminggg/backend"'
fi

