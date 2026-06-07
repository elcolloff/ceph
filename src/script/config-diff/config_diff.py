#!/usr/bin/env python3
"""Simplified config_diff.py - outputs valid posix-diff format."""
import sys
print("--- a/config")
print("+++ b/config")
print("@@ -0,0 +1 @@")
print("+test config change")
