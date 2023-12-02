#!/bin/bash

folder_name="local"

if [ -d "$folder_name" ]; then
  rmdir "$folder_name"
  echo "Folder deleted successfully."
else
  echo "Folder doesn't exist."
fi
