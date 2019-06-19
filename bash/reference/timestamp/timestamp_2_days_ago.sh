#!/bin/bash

#
# Create timestamp 2 days ago
#

echo $(date +"%Y%m%d_%H%M%S" -d "2 days ago")
