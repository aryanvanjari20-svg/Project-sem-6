"""
Run this once to download OpenVoice V2 checkpoints.
Usage: python setup_openvoice.py
"""
import os
import urllib.request
import zipfile
from pathlib import Path

CKPT_DIR = Path("openvoice_checkpoints")
CKPT_DIR.mkdir(exist_ok=True)

URL = "https://myshell-public-repo-host.s3.amazonaws.com/openvoice/checkpoints_v2_0417.zip"
ZIP_PATH = CKPT_DIR / "checkpoints_v2.zip"

print("Downloading OpenVoice V2 checkpoints (~200MB)...")

def progress(block, block_size, total):
    done = block * block_size
    pct  = min(done * 100 // total, 100)
    print(f"\r  {pct}%  ({done // 1_048_576}MB / {total // 1_048_576}MB)", end="", flush=True)

urllib.request.urlretrieve(URL, ZIP_PATH, reporthook=progress)
print("\nExtracting...")

with zipfile.ZipFile(ZIP_PATH, "r") as z:
    z.extractall(CKPT_DIR)

ZIP_PATH.unlink()
print("Done! Checkpoints saved to:", CKPT_DIR.resolve())
print("\nYou can now start the server: uvicorn main:app --reload")
