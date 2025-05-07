#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " message

# Prefix the message
full_message="THR: $message"

# Run Git commands
git add .
git commit -m "$full_message"
git push origin main
