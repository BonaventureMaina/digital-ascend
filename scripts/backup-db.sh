#!/bin/bash
# Backup the SQLite database to a timestamped file
DB_PATH="data/digital-ascend.db"
BACKUP_DIR="data/backups"
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/digital-ascend_$TIMESTAMP.db"
cp "$DB_PATH" "$BACKUP_FILE"
echo "Backup created: $BACKUP_FILE"
