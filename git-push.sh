#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " message

# Run Git commands
git add .
git commit -m "$message"
git push origin main
