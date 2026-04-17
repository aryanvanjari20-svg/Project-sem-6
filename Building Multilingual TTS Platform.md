# Chat Conversation

Note: _This is purely the output of the chat conversation and does not contain any raw data, codebase snippets, etc. used to generate the output._

### User Input

Act as an expert full-stack AI developer. I want to build a "Multilingual Voice Cloning & Text-to-Speech (TTS) Platform". Please write the complete, production-ready code for this application.

Tech Stack Requirements:
- Frontend & Routing: Streamlit (Python) for a clean, responsive, and fast UI.
- Backend/AI Logic: Python.
- AI Models/APIs: Integrate options for either an API-based service (like ElevenLabs) or an open-source local library (like Coqui-TTS or gTTS) for handling the voice synthesis and cloning.

Core Functionalities to Implement:
1. Text-to-Speech (TTS) Interface:
   - A main text area where users can input the text they want to convert.
   - A dropdown menu to select the target language (e.g., English, Spanish, French, Hindi).
   - A dropdown menu to select from a list of pre-set default voices.

2. Voice Cloning Module:
   - A file uploader component that accepts clean audio samples (.wav, .mp3) up to 10MB.
   - A text input field to name the newly cloned voice.
   - Logic to process this uploaded sample and dynamically add the new custom voice to the voice selection dropdown.

3. Audio Generation & Playback:
   - A prominent "Generate Audio" button.
   - Once clicked, show a loading spinner with the text "Generating your audio...".
   - An integrated audio player component that appears below the text area to preview the generated speech immediately upon completion.

4. Download Feature:
   - Provide a direct download button alongside the audio player so the user can save the generated output locally to their machine as an MP3 or WAV file.

UI/UX Layout Details:
- Sidebar: Use the sidebar for application configurations. This should include an input field for any necessary API keys, the language selector, the voice selector, and the voice cloning file uploader.
- Main Panel: Dedicated to the text input box, the "Generate" button, and the audio playback/download results.
- Error Handling: Include clear warning messages (e.g., "Please enter text before generating", "Unsupported audio format for cloning", or "API key missing"). Add a clean header and a brief description of how to use the tool.

*Listed directory [TTS](file:///c:/Users/sidva/Desktop/TTS) *

*Edited relevant file*

### Planner Response

I have created an implementation plan for the Multilingual Voice Cloning & Text-to-Speech (TTS) Platform using Streamlit. 

I've opted to use robust logic handling `gTTS` as a fallback local TTS capability, and `ElevenLabs` for premium voice synthesis and voice cloning (since local voice cloning often requires heavy dependencies like Coqui-TTS that can be problematic to set up quickly on Windows). 

Please review the proposed plan and let me know if you approve or if you have any questions before I begin building!

### User Input



*Edited relevant file*

### Planner Response

I have completely updated the implementation plan to accommodate your request! 

Since you have your own voice data and want to run this locally without paying for ElevenLabs, I have switched the engine to use **Coqui-TTS (specifically the XTTSv2 model)**. This is a top-tier open-source model that supports zero-shot voice cloning. It can take a short audio sample of your voice and immediately generate speech in multiple languages.

Please review the updated plan and let me know if you are happy with this approach. Once approved, I will begin writing the platform!

### User Input



*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### Planner Response

The implementation is complete! I have created the production-ready code for your Multilingual Voice Studio. 

I've crafted a sleek UI inside Streamlit that leverages the powerful open-source `Coqui-TTS` engine with `XTTSv2` for both multilingual standard voices and instant zero-shot voice cloning. The code intelligently caches the engine to prevent unnecessary reloads, keeping generation fast on subsequent requests.

### What is included:
- **`app.py`**: The core application, featuring custom CSS styling to make it look incredibly premium (dark mode gradients, styling elements, and modern typography). It contains the file uploader for voice cloning and the playback capability.
- **`requirements.txt`**: All the needed dependencies (including `TTS`, `torchaudio`, and `streamlit`).

### To run the platform right now:
1. Open your terminal in the new folder: `cd c:\Users\sidva\Desktop\TTS`
2. Install the necessary libraries:
   ```cmd
   pip install -r requirements.txt
   ```
3. Run the interface:
   ```cmd
   streamlit run app.py
   ```

*(Note: The very first time you click "Generate", the Python engine will download the latest XTTS weights locally which are about 2GB. Subsequent generations will be much faster.)*

I've documented how the architecture functions in the **Walkthrough** artifact on the right. Give the application a run and let me know how it operates with your own distinct voice data!

### User Input

what python version should be used

*User accepted the command `pip install -r requirements.txt`*

### Planner Response

To ensure maximum compatibility with AI libraries like Coqui `TTS` and `torch`, you should use **Python 3.9, 3.10, or 3.11**. 

**Python 3.10 is the strongly recommended sweet-spot.**

I also see that your `pip install` just failed with this error:
`error: Microsoft Visual C++ 14.0 or greater is required.`

This happened because `pip` tried to compile a C++ extension for the TTS library (`monotonic_align`) from scratch, which happens when no pre-compiled wheel is available for your exact Python version (often the case if you are using Python 3.12 or newer).

### How to fix the installation error
You have two options:

**Option 1: Switch to Python 3.10 (Recommended)**
If you use Python 3.10, `pip` can often download pre-compiled versions of these packages, bypassing the need for C++ compilation entirely.

**Option 2: Install Microsoft C++ Build Tools**
If you want to stick to your current Python version, you need the compiler:
1. Download the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/).
2. Run the installer, and select **"Desktop development with C++"**.
3. Ensure the Windows 10/11 SDK and MSVC v143 build tools are checked on the right side.
4. Install it, restart your terminal, and run `pip install -r requirements.txt` again.

### User Input



              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.tts.utils.text.phonemizers' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.tts.utils.text.phonemizers' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.tts.utils.text.phonemizers' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.tts.utils.text.phonemizers' to be distributed and are
              already explicitly excluding 'TTS.tts.utils.text.phonemizers' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.utils' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.utils' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.utils' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.utils' to be distributed and are
              already explicitly excluding 'TTS.utils' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.utils.audio' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.utils.audio' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.utils.audio' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.utils.audio' to be distributed and are
              already explicitly excluding 'TTS.utils.audio' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.configs' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.configs' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.configs' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.configs' to be distributed and are
              already explicitly excluding 'TTS.vc.configs' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.models' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.models' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.models' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.models' to be distributed and are
              already explicitly excluding 'TTS.vc.models' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.modules' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.modules' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.modules' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.modules' to be distributed and are
              already explicitly excluding 'TTS.vc.modules' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.modules.freevc' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.modules.freevc' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.modules.freevc' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.modules.freevc' to be distributed and are
              already explicitly excluding 'TTS.vc.modules.freevc' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.modules.freevc.speaker_encoder' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.modules.freevc.speaker_encoder' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.modules.freevc.speaker_encoder' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.modules.freevc.speaker_encoder' to be distributed and are
              already explicitly excluding 'TTS.vc.modules.freevc.speaker_encoder' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vc.modules.freevc.wavlm' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vc.modules.freevc.wavlm' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vc.modules.freevc.wavlm' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vc.modules.freevc.wavlm' to be distributed and are
              already explicitly excluding 'TTS.vc.modules.freevc.wavlm' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder' to be distributed and are
              already explicitly excluding 'TTS.vocoder' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.configs' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder.configs' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder.configs' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder.configs' to be distributed and are
              already explicitly excluding 'TTS.vocoder.configs' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.datasets' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder.datasets' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder.datasets' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder.datasets' to be distributed and are
              already explicitly excluding 'TTS.vocoder.datasets' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.layers' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder.layers' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder.layers' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder.layers' to be distributed and are
              already explicitly excluding 'TTS.vocoder.layers' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.models' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder.models' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder.models' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder.models' to be distributed and are
              already explicitly excluding 'TTS.vocoder.models' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      C:\Users\sidva\AppData\Local\Temp\pip-build-env-44tzg1fh\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.utils' is absent from the `packages` configuration.
      !!

              ********************************************************************************
              ############################
              # Package would be ignored #
              ############################
              Python recognizes 'TTS.vocoder.utils' as an importable package[^1],
              but it is absent from setuptools' `packages` configuration.

              This leads to an ambiguous overall configuration. If you want to distribute this
              package, please make sure that 'TTS.vocoder.utils' is explicitly added
              to the `packages` configuration field.

              Alternatively, you can also rely on setuptools' discovery methods
              (for example by using `find_namespace_packages(...)`/`find_namespace:`
              instead of `find_packages(...)`/`find:`).

              You can read more about "package discovery" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

              If you don't want 'TTS.vocoder.utils' to be distributed and are
              already explicitly excluding 'TTS.vocoder.utils' via
              `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
              you can try to use `exclude_package_data`, or `include-package-data=False` in
              combination with a more fine grained `package-data` configuration.

              You can read more about "package data files" on setuptools documentation page:

              - https://setuptools.pypa.io/en/latest/userguide/datafiles.html


              [^1]: For Python, any directory (with suitable naming) can be imported,
                    even if it does not contain any `.py` files.
                    On the other hand, currently there is no concept of package data
                    directory, all directories are treated like packages.
              ********************************************************************************

      !!
        check.warn(importable)
      copying TTS\.models.json -> temp_build\TTS
      copying TTS\VERSION -> temp_build\TTS
      creating temp_build\TTS\tts\utils\monotonic_align
      copying TTS\tts\utils\monotonic_align\core.c -> temp_build\TTS\tts\utils\monotonic_align
      creating temp_build\TTS\bin
      copying TTS\bin\__init__.py -> temp_build\TTS\bin
      copying TTS\bin\collect_env_info.py -> temp_build\TTS\bin
      copying TTS\bin\compute_attention_masks.py -> temp_build\TTS\bin
      copying TTS\bin\compute_embeddings.py -> temp_build\TTS\bin
      copying TTS\bin\compute_statistics.py -> temp_build\TTS\bin
      copying TTS\bin\eval_encoder.py -> temp_build\TTS\bin
      copying TTS\bin\extract_tts_spectrograms.py -> temp_build\TTS\bin
      copying TTS\bin\find_unique_chars.py -> temp_build\TTS\bin
      copying TTS\bin\find_unique_phonemes.py -> temp_build\TTS\bin
      copying TTS\bin\remove_silence_using_vad.py -> temp_build\TTS\bin
      copying TTS\bin\resample.py -> temp_build\TTS\bin
      copying TTS\bin\synthesize.py -> temp_build\TTS\bin
      copying TTS\bin\train_encoder.py -> temp_build\TTS\bin
      copying TTS\bin\train_tts.py -> temp_build\TTS\bin
      copying TTS\bin\train_vocoder.py -> temp_build\TTS\bin
      copying TTS\bin\tune_wavegrad.py -> temp_build\TTS\bin
      creating temp_build\TTS\config
      copying TTS\config\__init__.py -> temp_build\TTS\config
      copying TTS\config\shared_configs.py -> temp_build\TTS\config
      creating temp_build\TTS\demos\xtts_ft_demo
      copying TTS\demos\xtts_ft_demo\xtts_demo.py -> temp_build\TTS\demos\xtts_ft_demo
      creating temp_build\TTS\demos\xtts_ft_demo\utils
      copying TTS\demos\xtts_ft_demo\utils\formatter.py -> temp_build\TTS\demos\xtts_ft_demo\utils
      copying TTS\demos\xtts_ft_demo\utils\gpt_train.py -> temp_build\TTS\demos\xtts_ft_demo\utils
      creating temp_build\TTS\encoder
      copying TTS\encoder\README.md -> temp_build\TTS\encoder
      copying TTS\encoder\__init__.py -> temp_build\TTS\encoder
      copying TTS\encoder\dataset.py -> temp_build\TTS\encoder
      copying TTS\encoder\losses.py -> temp_build\TTS\encoder
      creating temp_build\TTS\encoder\configs
      copying TTS\encoder\configs\base_encoder_config.py -> temp_build\TTS\encoder\configs
      copying TTS\encoder\configs\emotion_encoder_config.py -> temp_build\TTS\encoder\configs
      copying TTS\encoder\configs\speaker_encoder_config.py -> temp_build\TTS\encoder\configs
      creating temp_build\TTS\encoder\models
      copying TTS\encoder\models\base_encoder.py -> temp_build\TTS\encoder\models
      copying TTS\encoder\models\lstm.py -> temp_build\TTS\encoder\models
      copying TTS\encoder\models\resnet.py -> temp_build\TTS\encoder\models
      creating temp_build\TTS\encoder\utils
      copying TTS\encoder\utils\__init__.py -> temp_build\TTS\encoder\utils
      copying TTS\encoder\utils\generic_utils.py -> temp_build\TTS\encoder\utils
      copying TTS\encoder\utils\prepare_voxceleb.py -> temp_build\TTS\encoder\utils
      copying TTS\encoder\utils\training.py -> temp_build\TTS\encoder\utils
      copying TTS\encoder\utils\visual.py -> temp_build\TTS\encoder\utils
      creating temp_build\TTS\server
      copying TTS\server\README.md -> temp_build\TTS\server
      copying TTS\server\__init__.py -> temp_build\TTS\server
      copying TTS\server\conf.json -> temp_build\TTS\server
      copying TTS\server\server.py -> temp_build\TTS\server
      creating temp_build\TTS\server\static
      copying TTS\server\static\coqui-log-green-TTS.png -> temp_build\TTS\server\static
      creating temp_build\TTS\server\templates
      copying TTS\server\templates\details.html -> temp_build\TTS\server\templates
      copying TTS\server\templates\index.html -> temp_build\TTS\server\templates
      copying TTS\tts\__init__.py -> temp_build\TTS\tts
      creating temp_build\TTS\tts\configs
      copying TTS\tts\configs\__init__.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\align_tts_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\bark_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\delightful_tts_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\fast_pitch_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\fast_speech_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\fastspeech2_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\glow_tts_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\neuralhmm_tts_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\overflow_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\shared_configs.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\speedy_speech_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\tacotron2_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\tacotron_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\tortoise_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\vits_config.py -> temp_build\TTS\tts\configs
      copying TTS\tts\configs\xtts_config.py -> temp_build\TTS\tts\configs
      creating temp_build\TTS\tts\datasets
      copying TTS\tts\datasets\__init__.py -> temp_build\TTS\tts\datasets
      copying TTS\tts\datasets\dataset.py -> temp_build\TTS\tts\datasets
      copying TTS\tts\datasets\formatters.py -> temp_build\TTS\tts\datasets
      creating temp_build\TTS\tts\layers
      copying TTS\tts\layers\__init__.py -> temp_build\TTS\tts\layers
      copying TTS\tts\layers\losses.py -> temp_build\TTS\tts\layers
      creating temp_build\TTS\tts\layers\align_tts
      copying TTS\tts\layers\align_tts\__init__.py -> temp_build\TTS\tts\layers\align_tts
      copying TTS\tts\layers\align_tts\duration_predictor.py -> temp_build\TTS\tts\layers\align_tts
      copying TTS\tts\layers\align_tts\mdn.py -> temp_build\TTS\tts\layers\align_tts
      creating temp_build\TTS\tts\layers\bark
      copying TTS\tts\layers\bark\__init__.py -> temp_build\TTS\tts\layers\bark
      copying TTS\tts\layers\bark\inference_funcs.py -> temp_build\TTS\tts\layers\bark
      copying TTS\tts\layers\bark\load_model.py -> temp_build\TTS\tts\layers\bark
      copying TTS\tts\layers\bark\model.py -> temp_build\TTS\tts\layers\bark
      copying TTS\tts\layers\bark\model_fine.py -> temp_build\TTS\tts\layers\bark
      creating temp_build\TTS\tts\layers\bark\hubert
      copying TTS\tts\layers\bark\hubert\__init__.py -> temp_build\TTS\tts\layers\bark\hubert
      copying TTS\tts\layers\bark\hubert\hubert_manager.py -> temp_build\TTS\tts\layers\bark\hubert
      copying TTS\tts\layers\bark\hubert\kmeans_hubert.py -> temp_build\TTS\tts\layers\bark\hubert
      copying TTS\tts\layers\bark\hubert\tokenizer.py -> temp_build\TTS\tts\layers\bark\hubert
      creating temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\__init__.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\acoustic_model.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\conformer.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\conv_layers.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\encoders.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\energy_adaptor.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\kernel_predictor.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\networks.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\phoneme_prosody_predictor.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\pitch_adaptor.py -> temp_build\TTS\tts\layers\delightful_tts
      copying TTS\tts\layers\delightful_tts\variance_predictor.py -> temp_build\TTS\tts\layers\delightful_tts
      creating temp_build\TTS\tts\layers\feed_forward
      copying TTS\tts\layers\feed_forward\__init__.py -> temp_build\TTS\tts\layers\feed_forward
      copying TTS\tts\layers\feed_forward\decoder.py -> temp_build\TTS\tts\layers\feed_forward
      copying TTS\tts\layers\feed_forward\duration_predictor.py -> temp_build\TTS\tts\layers\feed_forward
      copying TTS\tts\layers\feed_forward\encoder.py -> temp_build\TTS\tts\layers\feed_forward
      creating temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\__init__.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\aligner.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\gated_conv.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\normalization.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\pos_encoding.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\res_conv_bn.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\time_depth_sep_conv.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\transformer.py -> temp_build\TTS\tts\layers\generic
      copying TTS\tts\layers\generic\wavenet.py -> temp_build\TTS\tts\layers\generic
      creating temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\__init__.py -> temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\decoder.py -> temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\duration_predictor.py -> temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\encoder.py -> temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\glow.py -> temp_build\TTS\tts\layers\glow_tts
      copying TTS\tts\layers\glow_tts\transformer.py -> temp_build\TTS\tts\layers\glow_tts
      creating temp_build\TTS\tts\layers\overflow
      copying TTS\tts\layers\overflow\__init__.py -> temp_build\TTS\tts\layers\overflow
      copying TTS\tts\layers\overflow\common_layers.py -> temp_build\TTS\tts\layers\overflow
      copying TTS\tts\layers\overflow\decoder.py -> temp_build\TTS\tts\layers\overflow
      copying TTS\tts\layers\overflow\neural_hmm.py -> temp_build\TTS\tts\layers\overflow
      copying TTS\tts\layers\overflow\plotting_utils.py -> temp_build\TTS\tts\layers\overflow
      creating temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\__init__.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\attentions.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\capacitron_layers.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\common_layers.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\gst_layers.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\tacotron.py -> temp_build\TTS\tts\layers\tacotron
      copying TTS\tts\layers\tacotron\tacotron2.py -> temp_build\TTS\tts\layers\tacotron
      creating temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\arch_utils.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\audio_utils.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\autoregressive.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\classifier.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\clvp.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\diffusion.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\diffusion_decoder.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\dpm_solver.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\random_latent_generator.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\tokenizer.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\transformer.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\utils.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\vocoder.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\wav2vec_alignment.py -> temp_build\TTS\tts\layers\tortoise
      copying TTS\tts\layers\tortoise\xtransformers.py -> temp_build\TTS\tts\layers\tortoise
      creating temp_build\TTS\tts\layers\vits
      copying TTS\tts\layers\vits\discriminator.py -> temp_build\TTS\tts\layers\vits
      copying TTS\tts\layers\vits\networks.py -> temp_build\TTS\tts\layers\vits
      copying TTS\tts\layers\vits\stochastic_duration_predictor.py -> temp_build\TTS\tts\layers\vits
      copying TTS\tts\layers\vits\transforms.py -> temp_build\TTS\tts\layers\vits
      creating temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\dvae.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\gpt.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\gpt_inference.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\hifigan_decoder.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\latent_encoder.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\perceiver_encoder.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\stream_generator.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\tokenizer.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\xtts_manager.py -> temp_build\TTS\tts\layers\xtts
      copying TTS\tts\layers\xtts\zh_num2words.py -> temp_build\TTS\tts\layers\xtts
      creating temp_build\TTS\tts\layers\xtts\trainer
      copying TTS\tts\layers\xtts\trainer\dataset.py -> temp_build\TTS\tts\layers\xtts\trainer
      copying TTS\tts\layers\xtts\trainer\gpt_trainer.py -> temp_build\TTS\tts\layers\xtts\trainer
      creating temp_build\TTS\tts\models
      copying TTS\tts\models\__init__.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\align_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\bark.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\base_tacotron.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\base_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\delightful_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\forward_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\glow_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\neuralhmm_tts.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\overflow.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\tacotron.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\tacotron2.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\tortoise.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\vits.py -> temp_build\TTS\tts\models
      copying TTS\tts\models\xtts.py -> temp_build\TTS\tts\models
      copying TTS\tts\utils\__init__.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\data.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\fairseq.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\helpers.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\languages.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\managers.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\measures.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\speakers.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\ssim.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\synthesis.py -> temp_build\TTS\tts\utils
      copying TTS\tts\utils\visual.py -> temp_build\TTS\tts\utils
      creating temp_build\TTS\tts\utils\assets\tortoise
      copying TTS\tts\utils\assets\tortoise\tokenizer.json -> temp_build\TTS\tts\utils\assets\tortoise
      copying TTS\tts\utils\monotonic_align\__init__.py -> temp_build\TTS\tts\utils\monotonic_align
      copying TTS\tts\utils\monotonic_align\core.c -> temp_build\TTS\tts\utils\monotonic_align
      copying TTS\tts\utils\monotonic_align\core.pyx -> temp_build\TTS\tts\utils\monotonic_align
      copying TTS\tts\utils\monotonic_align\setup.py -> temp_build\TTS\tts\utils\monotonic_align
      creating temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\__init__.py -> temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\characters.py -> temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\cleaners.py -> temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\cmudict.py -> temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\punctuation.py -> temp_build\TTS\tts\utils\text
      copying TTS\tts\utils\text\tokenizer.py -> temp_build\TTS\tts\utils\text
      creating temp_build\TTS\tts\utils\text\bangla
      copying TTS\tts\utils\text\bangla\__init__.py -> temp_build\TTS\tts\utils\text\bangla
      copying TTS\tts\utils\text\bangla\phonemizer.py -> temp_build\TTS\tts\utils\text\bangla
      creating temp_build\TTS\tts\utils\text\belarusian
      copying TTS\tts\utils\text\belarusian\__init__.py -> temp_build\TTS\tts\utils\text\belarusian
      copying TTS\tts\utils\text\belarusian\phonemizer.py -> temp_build\TTS\tts\utils\text\belarusian
      creating temp_build\TTS\tts\utils\text\chinese_mandarin
      copying TTS\tts\utils\text\chinese_mandarin\__init__.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
      copying TTS\tts\utils\text\chinese_mandarin\numbers.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
      copying TTS\tts\utils\text\chinese_mandarin\phonemizer.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
      copying TTS\tts\utils\text\chinese_mandarin\pinyinToPhonemes.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
      creating temp_build\TTS\tts\utils\text\english
      copying TTS\tts\utils\text\english\__init__.py -> temp_build\TTS\tts\utils\text\english
      copying TTS\tts\utils\text\english\abbreviations.py -> temp_build\TTS\tts\utils\text\english
      copying TTS\tts\utils\text\english\number_norm.py -> temp_build\TTS\tts\utils\text\english
      copying TTS\tts\utils\text\english\time_norm.py -> temp_build\TTS\tts\utils\text\english
      creating temp_build\TTS\tts\utils\text\french
      copying TTS\tts\utils\text\french\__init__.py -> temp_build\TTS\tts\utils\text\french
      copying TTS\tts\utils\text\french\abbreviations.py -> temp_build\TTS\tts\utils\text\french
      creating temp_build\TTS\tts\utils\text\japanese
      copying TTS\tts\utils\text\japanese\__init__.py -> temp_build\TTS\tts\utils\text\japanese
      copying TTS\tts\utils\text\japanese\phonemizer.py -> temp_build\TTS\tts\utils\text\japanese
      creating temp_build\TTS\tts\utils\text\korean
      copying TTS\tts\utils\text\korean\__init__.py -> temp_build\TTS\tts\utils\text\korean
      copying TTS\tts\utils\text\korean\ko_dictionary.py -> temp_build\TTS\tts\utils\text\korean
      copying TTS\tts\utils\text\korean\korean.py -> temp_build\TTS\tts\utils\text\korean
      copying TTS\tts\utils\text\korean\phonemizer.py -> temp_build\TTS\tts\utils\text\korean
      creating temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\__init__.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\bangla_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\base.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\belarusian_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\espeak_wrapper.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\gruut_wrapper.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\ja_jp_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\ko_kr_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\multi_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      copying TTS\tts\utils\text\phonemizers\zh_cn_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
      creating temp_build\TTS\utils
      copying TTS\utils\__init__.py -> temp_build\TTS\utils
      copying TTS\utils\callbacks.py -> temp_build\TTS\utils
      copying TTS\utils\capacitron_optimizer.py -> temp_build\TTS\utils
      copying TTS\utils\distribute.py -> temp_build\TTS\utils
      copying TTS\utils\download.py -> temp_build\TTS\utils
      copying TTS\utils\downloaders.py -> temp_build\TTS\utils
      copying TTS\utils\generic_utils.py -> temp_build\TTS\utils
      copying TTS\utils\io.py -> temp_build\TTS\utils
      copying TTS\utils\manage.py -> temp_build\TTS\utils
      copying TTS\utils\radam.py -> temp_build\TTS\utils
      copying TTS\utils\samplers.py -> temp_build\TTS\utils
      copying TTS\utils\synthesizer.py -> temp_build\TTS\utils
      copying TTS\utils\training.py -> temp_build\TTS\utils
      copying TTS\utils\vad.py -> temp_build\TTS\utils
      creating temp_build\TTS\utils\audio
      copying TTS\utils\audio\__init__.py -> temp_build\TTS\utils\audio
      copying TTS\utils\audio\numpy_transforms.py -> temp_build\TTS\utils\audio
      copying TTS\utils\audio\processor.py -> temp_build\TTS\utils\audio
      copying TTS\utils\audio\torch_transforms.py -> temp_build\TTS\utils\audio
      creating temp_build\TTS\vc\configs
      copying TTS\vc\configs\__init__.py -> temp_build\TTS\vc\configs
      copying TTS\vc\configs\freevc_config.py -> temp_build\TTS\vc\configs
      copying TTS\vc\configs\shared_configs.py -> temp_build\TTS\vc\configs
      creating temp_build\TTS\vc\models
      copying TTS\vc\models\__init__.py -> temp_build\TTS\vc\models
      copying TTS\vc\models\base_vc.py -> temp_build\TTS\vc\models
      copying TTS\vc\models\freevc.py -> temp_build\TTS\vc\models
      creating temp_build\TTS\vc\modules
      copying TTS\vc\modules\__init__.py -> temp_build\TTS\vc\modules
      creating temp_build\TTS\vc\modules\freevc
      copying TTS\vc\modules\freevc\__init__.py -> temp_build\TTS\vc\modules\freevc
      copying TTS\vc\modules\freevc\commons.py -> temp_build\TTS\vc\modules\freevc
      copying TTS\vc\modules\freevc\mel_processing.py -> temp_build\TTS\vc\modules\freevc
      copying TTS\vc\modules\freevc\modules.py -> temp_build\TTS\vc\modules\freevc
      creating temp_build\TTS\vc\modules\freevc\speaker_encoder
      copying TTS\vc\modules\freevc\speaker_encoder\__init__.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
      copying TTS\vc\modules\freevc\speaker_encoder\audio.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
      copying TTS\vc\modules\freevc\speaker_encoder\hparams.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
      copying TTS\vc\modules\freevc\speaker_encoder\speaker_encoder.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
      creating temp_build\TTS\vc\modules\freevc\wavlm
      copying TTS\vc\modules\freevc\wavlm\__init__.py -> temp_build\TTS\vc\modules\freevc\wavlm
      copying TTS\vc\modules\freevc\wavlm\config.json -> temp_build\TTS\vc\modules\freevc\wavlm
      copying TTS\vc\modules\freevc\wavlm\modules.py -> temp_build\TTS\vc\modules\freevc\wavlm
      copying TTS\vc\modules\freevc\wavlm\wavlm.py -> temp_build\TTS\vc\modules\freevc\wavlm
      creating temp_build\TTS\vocoder
      copying TTS\vocoder\README.md -> temp_build\TTS\vocoder
      copying TTS\vocoder\__init__.py -> temp_build\TTS\vocoder
      creating temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\__init__.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\fullband_melgan_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\hifigan_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\melgan_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\multiband_melgan_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\parallel_wavegan_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\shared_configs.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\univnet_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\wavegrad_config.py -> temp_build\TTS\vocoder\configs
      copying TTS\vocoder\configs\wavernn_config.py -> temp_build\TTS\vocoder\configs
      creating temp_build\TTS\vocoder\datasets
      copying TTS\vocoder\datasets\__init__.py -> temp_build\TTS\vocoder\datasets
      copying TTS\vocoder\datasets\gan_dataset.py -> temp_build\TTS\vocoder\datasets
      copying TTS\vocoder\datasets\preprocess.py -> temp_build\TTS\vocoder\datasets
      copying TTS\vocoder\datasets\wavegrad_dataset.py -> temp_build\TTS\vocoder\datasets
      copying TTS\vocoder\datasets\wavernn_dataset.py -> temp_build\TTS\vocoder\datasets
      creating temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\__init__.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\hifigan.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\losses.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\lvc_block.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\melgan.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\parallel_wavegan.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\pqmf.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\upsample.py -> temp_build\TTS\vocoder\layers
      copying TTS\vocoder\layers\wavegrad.py -> temp_build\TTS\vocoder\layers
      creating temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\__init__.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\base_vocoder.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\fullband_melgan_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\gan.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\hifigan_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\hifigan_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\melgan_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\melgan_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\melgan_multiscale_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\multiband_melgan_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\parallel_wavegan_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\parallel_wavegan_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\random_window_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\univnet_discriminator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\univnet_generator.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\wavegrad.py -> temp_build\TTS\vocoder\models
      copying TTS\vocoder\models\wavernn.py -> temp_build\TTS\vocoder\models
      creating temp_build\TTS\vocoder\utils
      copying TTS\vocoder\utils\__init__.py -> temp_build\TTS\vocoder\utils
      copying TTS\vocoder\utils\distribution.py -> temp_build\TTS\vocoder\utils
      copying TTS\vocoder\utils\generic_utils.py -> temp_build\TTS\vocoder\utils
      running build_ext
      building 'TTS.tts.utils.monotonic_align.core' extension
      error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel for TTS
Failed to build TTS

[notice] A new release of pip is available: 25.3 -> 26.0.1
[notice] To update, run: python.exe -m pip install --upgrade pip
error: failed-wheel-build-for-install

× Failed to build installable wheels for some pyproject.toml based projects
╰─> TTS
PS C:\Users\sidva\Desktop\TTS> 

*User accepted the command `pip install -r requirements.txt
`*

*User accepted the command `python --version`*

### Planner Response

It looks like the installation still got stuck at the exact same step! This is a classic Windows environment issue when working with AI libraries.

Because Microsoft Windows doesn't come with C++ compilers built-in, `pip` is failing when it tries to compile `monotonic_align` (a core module inside Coqui TTS). 

You **must** install the Microsoft C++ Build Tools for the installation to succeed. 

### Step-by-Step Fix:
1. Go to this link: [Microsoft Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
2. Click **"Download Build Tools"** and run the downloaded `.exe` file.
3. When the Visual Studio Installer opens, check the box that says **"Desktop development with C++"**.
4. Click **Install**. (This requires roughly 6-8 GB of space).
5. Once the installation is completely finished, **close your terminal/command prompt and open a new one** (this is important so it registers the new C++ compiler).
6. Navigate back to the folder and run the install again:
   ```cmd
   cd c:\Users\sidva\Desktop\TTS
   pip install -r requirements.txt
   ```

*(Alternatively, installing exactly Python 3.10 and creating a new environment might let `pip` download a pre-built file that avoids compiling C++ entirely, but installing the Build Tools is the most guaranteed fix for this issue across all Python versions).*

### User Input

how do i shift to python 3.10

### Planner Response

Shifting to Python 3.10 on Windows is straightforward. The easiest and cleanest way to do this without breaking your other projects is to install Python 3.10 and then use it to create an isolated "virtual environment" for our TTS project.

Here is the step-by-step guide:

### Step 1: Download and Install Python 3.10
1. Go to the official Python download page for **Python 3.10.11**: [Download Python 3.10.11 (Windows 64-bit installer)](https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe)
2. Run the downloaded installer.
3. **CRITICAL STEP**: On the very first screen of the installer, make sure to check the box that says **"Add Python 3.10 to PATH"** at the bottom *before* you click Install.
4. Click **Install Now** and wait for it to finish.

### Step 2: Create a Python 3.10 Virtual Environment
Once installed, open a fresh command prompt (close the one you currently have open, and open a new one), and navigate to our project folder:
```cmd
cd c:\Users\sidva\Desktop\TTS
```

Now, explicitly create a virtual environment using your new Python 3.10 installation:
```cmd
py -3.10 -m venv venv
```
*(This commands Windows to specifically use the Python 3.10 version you just installed to create an isolated environment folder called `venv`.)*

### Step 3: Activate and Install
Activate your new isolated Python 3.10 environment:
```cmd
venv\Scripts\activate
```
*(You should now see `(venv)` at the beginning of your command line prompt, indicating the environment is active).*

Finally, run the installation again. It will now use Python 3.10 and should bypass the C++ compilation error by grabbing pre-compiled wheels:
```cmd
pip install -r requirements.txt
```

### User Input

  !!
    check.warn(importable)
  C:\Users\sidva\AppData\Local\Temp\pip-build-env-rbnjta7b\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.models' is absent from the `packages` configuration.
  !!

          ********************************************************************************
          ############################  
          # Package would be ignored #  
          ############################  
          Python recognizes 'TTS.vocoder.models' as an importable package[^1],  
          but it is absent from setuptools' `packages` configuration.

          This leads to an ambiguous overall configuration. If you want to distribute this
          package, please make sure that 'TTS.vocoder.models' is explicitly added
          to the `packages` configuration field.

          Alternatively, you can also rely on setuptools' discovery methods     
          (for example by using `find_namespace_packages(...)`/`find_namespace:`
          instead of `find_packages(...)`/`find:`).

          You can read more about "package discovery" on setuptools documentation page:

          - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

          If you don't want 'TTS.vocoder.models' to be distributed and are      
          already explicitly excluding 'TTS.vocoder.models' via
          `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
          you can try to use `exclude_package_data`, or `include-package-data=False` in
          combination with a more fine grained `package-data` configuration.    

          You can read more about "package data files" on setuptools documentation page:

          - https://setuptools.pypa.io/en/latest/userguide/datafiles.html       


          [^1]: For Python, any directory (with suitable naming) can be imported,
                even if it does not contain any `.py` files.
                On the other hand, currently there is no concept of package data
                directory, all directories are treated like packages.
          ********************************************************************************

  !!
    check.warn(importable)
  C:\Users\sidva\AppData\Local\Temp\pip-build-env-rbnjta7b\overlay\Lib\site-packages\setuptools\command\build_py.py:215: _Warning: Package 'TTS.vocoder.utils' is absent from the `packages` configuration.
  !!

          ********************************************************************************
          ############################  
          # Package would be ignored #  
          ############################  
          Python recognizes 'TTS.vocoder.utils' as an importable package[^1],   
          but it is absent from setuptools' `packages` configuration.

          This leads to an ambiguous overall configuration. If you want to distribute this
          package, please make sure that 'TTS.vocoder.utils' is explicitly added
          to the `packages` configuration field.

          Alternatively, you can also rely on setuptools' discovery methods     
          (for example by using `find_namespace_packages(...)`/`find_namespace:`
          instead of `find_packages(...)`/`find:`).

          You can read more about "package discovery" on setuptools documentation page:

          - https://setuptools.pypa.io/en/latest/userguide/package_discovery.html

          If you don't want 'TTS.vocoder.utils' to be distributed and are       
          already explicitly excluding 'TTS.vocoder.utils' via
          `find_namespace_packages(...)/find_namespace` or `find_packages(...)/find`,
          you can try to use `exclude_package_data`, or `include-package-data=False` in
          combination with a more fine grained `package-data` configuration.    

          You can read more about "package data files" on setuptools documentation page:

          - https://setuptools.pypa.io/en/latest/userguide/datafiles.html       


          [^1]: For Python, any directory (with suitable naming) can be imported,
                even if it does not contain any `.py` files.
                On the other hand, currently there is no concept of package data
                directory, all directories are treated like packages.
          ********************************************************************************

  !!
    check.warn(importable)
  copying TTS\.models.json -> temp_build\TTS
  copying TTS\VERSION -> temp_build\TTS 
  creating temp_build\TTS\tts\utils\monotonic_align
  copying TTS\tts\utils\monotonic_align\core.c -> temp_build\TTS\tts\utils\monotonic_align
  creating temp_build\TTS\bin
  copying TTS\bin\__init__.py -> temp_build\TTS\bin
  copying TTS\bin\collect_env_info.py -> temp_build\TTS\bin
  copying TTS\bin\compute_attention_masks.py -> temp_build\TTS\bin
  copying TTS\bin\compute_embeddings.py -> temp_build\TTS\bin
  copying TTS\bin\compute_statistics.py -> temp_build\TTS\bin
  copying TTS\bin\eval_encoder.py -> temp_build\TTS\bin
  copying TTS\bin\extract_tts_spectrograms.py -> temp_build\TTS\bin
  copying TTS\bin\find_unique_chars.py -> temp_build\TTS\bin
  copying TTS\bin\find_unique_phonemes.py -> temp_build\TTS\bin
  copying TTS\bin\remove_silence_using_vad.py -> temp_build\TTS\bin
  copying TTS\bin\resample.py -> temp_build\TTS\bin
  copying TTS\bin\synthesize.py -> temp_build\TTS\bin
  copying TTS\bin\train_encoder.py -> temp_build\TTS\bin
  copying TTS\bin\train_tts.py -> temp_build\TTS\bin
  copying TTS\bin\train_vocoder.py -> temp_build\TTS\bin
  copying TTS\bin\tune_wavegrad.py -> temp_build\TTS\bin
  creating temp_build\TTS\config        
  copying TTS\config\__init__.py -> temp_build\TTS\config
  copying TTS\config\shared_configs.py -> temp_build\TTS\config
  creating temp_build\TTS\demos\xtts_ft_demo
  copying TTS\demos\xtts_ft_demo\xtts_demo.py -> temp_build\TTS\demos\xtts_ft_demo
  creating temp_build\TTS\demos\xtts_ft_demo\utils
  copying TTS\demos\xtts_ft_demo\utils\formatter.py -> temp_build\TTS\demos\xtts_ft_demo\utils
  copying TTS\demos\xtts_ft_demo\utils\gpt_train.py -> temp_build\TTS\demos\xtts_ft_demo\utils
  creating temp_build\TTS\encoder       
  copying TTS\encoder\README.md -> temp_build\TTS\encoder
  copying TTS\encoder\__init__.py -> temp_build\TTS\encoder
  copying TTS\encoder\dataset.py -> temp_build\TTS\encoder
  copying TTS\encoder\losses.py -> temp_build\TTS\encoder
  creating temp_build\TTS\encoder\configs
  copying TTS\encoder\configs\base_encoder_config.py -> temp_build\TTS\encoder\configs
  copying TTS\encoder\configs\emotion_encoder_config.py -> temp_build\TTS\encoder\configs
  copying TTS\encoder\configs\speaker_encoder_config.py -> temp_build\TTS\encoder\configs
  creating temp_build\TTS\encoder\models
  copying TTS\encoder\models\base_encoder.py -> temp_build\TTS\encoder\models   
  copying TTS\encoder\models\lstm.py -> temp_build\TTS\encoder\models
  copying TTS\encoder\models\resnet.py -> temp_build\TTS\encoder\models
  creating temp_build\TTS\encoder\utils 
  copying TTS\encoder\utils\__init__.py -> temp_build\TTS\encoder\utils
  copying TTS\encoder\utils\generic_utils.py -> temp_build\TTS\encoder\utils    
  copying TTS\encoder\utils\prepare_voxceleb.py -> temp_build\TTS\encoder\utils 
  copying TTS\encoder\utils\training.py -> temp_build\TTS\encoder\utils
  copying TTS\encoder\utils\visual.py -> temp_build\TTS\encoder\utils
  creating temp_build\TTS\server        
  copying TTS\server\README.md -> temp_build\TTS\server
  copying TTS\server\__init__.py -> temp_build\TTS\server
  copying TTS\server\conf.json -> temp_build\TTS\server
  copying TTS\server\server.py -> temp_build\TTS\server
  creating temp_build\TTS\server\static 
  copying TTS\server\static\coqui-log-green-TTS.png -> temp_build\TTS\server\static
  creating temp_build\TTS\server\templates
  copying TTS\server\templates\details.html -> temp_build\TTS\server\templates  
  copying TTS\server\templates\index.html -> temp_build\TTS\server\templates    
  copying TTS\tts\__init__.py -> temp_build\TTS\tts
  creating temp_build\TTS\tts\configs   
  copying TTS\tts\configs\__init__.py -> temp_build\TTS\tts\configs
  copying TTS\tts\configs\align_tts_config.py -> temp_build\TTS\tts\configs     
  copying TTS\tts\configs\bark_config.py -> temp_build\TTS\tts\configs
  copying TTS\tts\configs\delightful_tts_config.py -> temp_build\TTS\tts\configs
  copying TTS\tts\configs\fast_pitch_config.py -> temp_build\TTS\tts\configs    
  copying TTS\tts\configs\fast_speech_config.py -> temp_build\TTS\tts\configs   
  copying TTS\tts\configs\fastspeech2_config.py -> temp_build\TTS\tts\configs   
  copying TTS\tts\configs\glow_tts_config.py -> temp_build\TTS\tts\configs      
  copying TTS\tts\configs\neuralhmm_tts_config.py -> temp_build\TTS\tts\configs 
  copying TTS\tts\configs\overflow_config.py -> temp_build\TTS\tts\configs      
  copying TTS\tts\configs\shared_configs.py -> temp_build\TTS\tts\configs       
  copying TTS\tts\configs\speedy_speech_config.py -> temp_build\TTS\tts\configs 
  copying TTS\tts\configs\tacotron2_config.py -> temp_build\TTS\tts\configs     
  copying TTS\tts\configs\tacotron_config.py -> temp_build\TTS\tts\configs      
  copying TTS\tts\configs\tortoise_config.py -> temp_build\TTS\tts\configs      
  copying TTS\tts\configs\vits_config.py -> temp_build\TTS\tts\configs
  copying TTS\tts\configs\xtts_config.py -> temp_build\TTS\tts\configs
  creating temp_build\TTS\tts\datasets  
  copying TTS\tts\datasets\__init__.py -> temp_build\TTS\tts\datasets
  copying TTS\tts\datasets\dataset.py -> temp_build\TTS\tts\datasets
  copying TTS\tts\datasets\formatters.py -> temp_build\TTS\tts\datasets
  creating temp_build\TTS\tts\layers    
  copying TTS\tts\layers\__init__.py -> temp_build\TTS\tts\layers
  copying TTS\tts\layers\losses.py -> temp_build\TTS\tts\layers
  creating temp_build\TTS\tts\layers\align_tts
  copying TTS\tts\layers\align_tts\__init__.py -> temp_build\TTS\tts\layers\align_tts
  copying TTS\tts\layers\align_tts\duration_predictor.py -> temp_build\TTS\tts\layers\align_tts
  copying TTS\tts\layers\align_tts\mdn.py -> temp_build\TTS\tts\layers\align_tts
  creating temp_build\TTS\tts\layers\bark
  copying TTS\tts\layers\bark\__init__.py -> temp_build\TTS\tts\layers\bark     
  copying TTS\tts\layers\bark\inference_funcs.py -> temp_build\TTS\tts\layers\bark
  copying TTS\tts\layers\bark\load_model.py -> temp_build\TTS\tts\layers\bark   
  copying TTS\tts\layers\bark\model.py -> temp_build\TTS\tts\layers\bark        
  copying TTS\tts\layers\bark\model_fine.py -> temp_build\TTS\tts\layers\bark   
  creating temp_build\TTS\tts\layers\bark\hubert
  copying TTS\tts\layers\bark\hubert\__init__.py -> temp_build\TTS\tts\layers\bark\hubert
  copying TTS\tts\layers\bark\hubert\hubert_manager.py -> temp_build\TTS\tts\layers\bark\hubert
  copying TTS\tts\layers\bark\hubert\kmeans_hubert.py -> temp_build\TTS\tts\layers\bark\hubert
  copying TTS\tts\layers\bark\hubert\tokenizer.py -> temp_build\TTS\tts\layers\bark\hubert
  creating temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\__init__.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\acoustic_model.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\conformer.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\conv_layers.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\encoders.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\energy_adaptor.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\kernel_predictor.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\networks.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\phoneme_prosody_predictor.py -> temp_build\TTS\tts\layers\delightful_tts        
  copying TTS\tts\layers\delightful_tts\pitch_adaptor.py -> temp_build\TTS\tts\layers\delightful_tts
  copying TTS\tts\layers\delightful_tts\variance_predictor.py -> temp_build\TTS\tts\layers\delightful_tts
  creating temp_build\TTS\tts\layers\feed_forward
  copying TTS\tts\layers\feed_forward\__init__.py -> temp_build\TTS\tts\layers\feed_forward
  copying TTS\tts\layers\feed_forward\decoder.py -> temp_build\TTS\tts\layers\feed_forward
  copying TTS\tts\layers\feed_forward\duration_predictor.py -> temp_build\TTS\tts\layers\feed_forward
  copying TTS\tts\layers\feed_forward\encoder.py -> temp_build\TTS\tts\layers\feed_forward
  creating temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\__init__.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\aligner.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\gated_conv.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\normalization.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\pos_encoding.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\res_conv_bn.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\time_depth_sep_conv.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\transformer.py -> temp_build\TTS\tts\layers\generic
  copying TTS\tts\layers\generic\wavenet.py -> temp_build\TTS\tts\layers\generic
  creating temp_build\TTS\tts\layers\glow_tts
  copying TTS\tts\layers\glow_tts\__init__.py -> temp_build\TTS\tts\layers\glow_tts
  copying TTS\tts\layers\glow_tts\decoder.py -> temp_build\TTS\tts\layers\glow_tts
  copying TTS\tts\layers\glow_tts\duration_predictor.py -> temp_build\TTS\tts\layers\glow_tts
  copying TTS\tts\layers\glow_tts\encoder.py -> temp_build\TTS\tts\layers\glow_tts
  copying TTS\tts\layers\glow_tts\glow.py -> temp_build\TTS\tts\layers\glow_tts 
  copying TTS\tts\layers\glow_tts\transformer.py -> temp_build\TTS\tts\layers\glow_tts
  creating temp_build\TTS\tts\layers\overflow
  copying TTS\tts\layers\overflow\__init__.py -> temp_build\TTS\tts\layers\overflow
  copying TTS\tts\layers\overflow\common_layers.py -> temp_build\TTS\tts\layers\overflow
  copying TTS\tts\layers\overflow\decoder.py -> temp_build\TTS\tts\layers\overflow
  copying TTS\tts\layers\overflow\neural_hmm.py -> temp_build\TTS\tts\layers\overflow
  copying TTS\tts\layers\overflow\plotting_utils.py -> temp_build\TTS\tts\layers\overflow
  creating temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\__init__.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\attentions.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\capacitron_layers.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\common_layers.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\gst_layers.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\tacotron.py -> temp_build\TTS\tts\layers\tacotron
  copying TTS\tts\layers\tacotron\tacotron2.py -> temp_build\TTS\tts\layers\tacotron
  creating temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\arch_utils.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\audio_utils.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\autoregressive.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\classifier.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\clvp.py -> temp_build\TTS\tts\layers\tortoise 
  copying TTS\tts\layers\tortoise\diffusion.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\diffusion_decoder.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\dpm_solver.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\random_latent_generator.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\tokenizer.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\transformer.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\utils.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\vocoder.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\wav2vec_alignment.py -> temp_build\TTS\tts\layers\tortoise
  copying TTS\tts\layers\tortoise\xtransformers.py -> temp_build\TTS\tts\layers\tortoise
  creating temp_build\TTS\tts\layers\vits
  copying TTS\tts\layers\vits\discriminator.py -> temp_build\TTS\tts\layers\vits
  copying TTS\tts\layers\vits\networks.py -> temp_build\TTS\tts\layers\vits     
  copying TTS\tts\layers\vits\stochastic_duration_predictor.py -> temp_build\TTS\tts\layers\vits
  copying TTS\tts\layers\vits\transforms.py -> temp_build\TTS\tts\layers\vits   
  creating temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\dvae.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\gpt.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\gpt_inference.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\hifigan_decoder.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\latent_encoder.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\perceiver_encoder.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\stream_generator.py -> temp_build\TTS\tts\layers\xtts
  copying TTS\tts\layers\xtts\tokenizer.py -> temp_build\TTS\tts\layers\xtts    
  copying TTS\tts\layers\xtts\xtts_manager.py -> temp_build\TTS\tts\layers\xtts 
  copying TTS\tts\layers\xtts\zh_num2words.py -> temp_build\TTS\tts\layers\xtts 
  creating temp_build\TTS\tts\layers\xtts\trainer
  copying TTS\tts\layers\xtts\trainer\dataset.py -> temp_build\TTS\tts\layers\xtts\trainer
  copying TTS\tts\layers\xtts\trainer\gpt_trainer.py -> temp_build\TTS\tts\layers\xtts\trainer
  creating temp_build\TTS\tts\models    
  copying TTS\tts\models\__init__.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\align_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\bark.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\base_tacotron.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\base_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\delightful_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\forward_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\glow_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\neuralhmm_tts.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\overflow.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\tacotron.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\tacotron2.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\tortoise.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\vits.py -> temp_build\TTS\tts\models
  copying TTS\tts\models\xtts.py -> temp_build\TTS\tts\models
  copying TTS\tts\utils\__init__.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\data.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\fairseq.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\helpers.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\languages.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\managers.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\measures.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\speakers.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\ssim.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\synthesis.py -> temp_build\TTS\tts\utils
  copying TTS\tts\utils\visual.py -> temp_build\TTS\tts\utils
  creating temp_build\TTS\tts\utils\assets\tortoise
  copying TTS\tts\utils\assets\tortoise\tokenizer.json -> temp_build\TTS\tts\utils\assets\tortoise
  copying TTS\tts\utils\monotonic_align\__init__.py -> temp_build\TTS\tts\utils\monotonic_align
  copying TTS\tts\utils\monotonic_align\core.c -> temp_build\TTS\tts\utils\monotonic_align
  copying TTS\tts\utils\monotonic_align\core.pyx -> temp_build\TTS\tts\utils\monotonic_align
  copying TTS\tts\utils\monotonic_align\setup.py -> temp_build\TTS\tts\utils\monotonic_align
  creating temp_build\TTS\tts\utils\text
  copying TTS\tts\utils\text\__init__.py -> temp_build\TTS\tts\utils\text       
  copying TTS\tts\utils\text\characters.py -> temp_build\TTS\tts\utils\text     
  copying TTS\tts\utils\text\cleaners.py -> temp_build\TTS\tts\utils\text       
  copying TTS\tts\utils\text\cmudict.py -> temp_build\TTS\tts\utils\text        
  copying TTS\tts\utils\text\punctuation.py -> temp_build\TTS\tts\utils\text    
  copying TTS\tts\utils\text\tokenizer.py -> temp_build\TTS\tts\utils\text      
  creating temp_build\TTS\tts\utils\text\bangla
  copying TTS\tts\utils\text\bangla\__init__.py -> temp_build\TTS\tts\utils\text\bangla
  copying TTS\tts\utils\text\bangla\phonemizer.py -> temp_build\TTS\tts\utils\text\bangla
  creating temp_build\TTS\tts\utils\text\belarusian
  copying TTS\tts\utils\text\belarusian\__init__.py -> temp_build\TTS\tts\utils\text\belarusian
  copying TTS\tts\utils\text\belarusian\phonemizer.py -> temp_build\TTS\tts\utils\text\belarusian
  creating temp_build\TTS\tts\utils\text\chinese_mandarin
  copying TTS\tts\utils\text\chinese_mandarin\__init__.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
  copying TTS\tts\utils\text\chinese_mandarin\numbers.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
  copying TTS\tts\utils\text\chinese_mandarin\phonemizer.py -> temp_build\TTS\tts\utils\text\chinese_mandarin
  copying TTS\tts\utils\text\chinese_mandarin\pinyinToPhonemes.py -> temp_build\TTS\tts\utils\text\chinese_mandarin     
  creating temp_build\TTS\tts\utils\text\english
  copying TTS\tts\utils\text\english\__init__.py -> temp_build\TTS\tts\utils\text\english
  copying TTS\tts\utils\text\english\abbreviations.py -> temp_build\TTS\tts\utils\text\english
  copying TTS\tts\utils\text\english\number_norm.py -> temp_build\TTS\tts\utils\text\english
  copying TTS\tts\utils\text\english\time_norm.py -> temp_build\TTS\tts\utils\text\english
  creating temp_build\TTS\tts\utils\text\french
  copying TTS\tts\utils\text\french\__init__.py -> temp_build\TTS\tts\utils\text\french
  copying TTS\tts\utils\text\french\abbreviations.py -> temp_build\TTS\tts\utils\text\french
  creating temp_build\TTS\tts\utils\text\japanese
  copying TTS\tts\utils\text\japanese\__init__.py -> temp_build\TTS\tts\utils\text\japanese
  copying TTS\tts\utils\text\japanese\phonemizer.py -> temp_build\TTS\tts\utils\text\japanese
  creating temp_build\TTS\tts\utils\text\korean
  copying TTS\tts\utils\text\korean\__init__.py -> temp_build\TTS\tts\utils\text\korean
  copying TTS\tts\utils\text\korean\ko_dictionary.py -> temp_build\TTS\tts\utils\text\korean
  copying TTS\tts\utils\text\korean\korean.py -> temp_build\TTS\tts\utils\text\korean
  copying TTS\tts\utils\text\korean\phonemizer.py -> temp_build\TTS\tts\utils\text\korean
  creating temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\__init__.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\bangla_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\base.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\belarusian_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\espeak_wrapper.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\gruut_wrapper.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\ja_jp_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\ko_kr_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\multi_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  copying TTS\tts\utils\text\phonemizers\zh_cn_phonemizer.py -> temp_build\TTS\tts\utils\text\phonemizers
  creating temp_build\TTS\utils
  copying TTS\utils\__init__.py -> temp_build\TTS\utils
  copying TTS\utils\callbacks.py -> temp_build\TTS\utils
  copying TTS\utils\capacitron_optimizer.py -> temp_build\TTS\utils
  copying TTS\utils\distribute.py -> temp_build\TTS\utils
  copying TTS\utils\download.py -> temp_build\TTS\utils
  copying TTS\utils\downloaders.py -> temp_build\TTS\utils
  copying TTS\utils\generic_utils.py -> temp_build\TTS\utils
  copying TTS\utils\io.py -> temp_build\TTS\utils
  copying TTS\utils\manage.py -> temp_build\TTS\utils
  copying TTS\utils\radam.py -> temp_build\TTS\utils
  copying TTS\utils\samplers.py -> temp_build\TTS\utils
  copying TTS\utils\synthesizer.py -> temp_build\TTS\utils
  copying TTS\utils\training.py -> temp_build\TTS\utils
  copying TTS\utils\vad.py -> temp_build\TTS\utils
  creating temp_build\TTS\utils\audio   
  copying TTS\utils\audio\__init__.py -> temp_build\TTS\utils\audio
  copying TTS\utils\audio\numpy_transforms.py -> temp_build\TTS\utils\audio     
  copying TTS\utils\audio\processor.py -> temp_build\TTS\utils\audio
  copying TTS\utils\audio\torch_transforms.py -> temp_build\TTS\utils\audio     
  creating temp_build\TTS\vc\configs    
  copying TTS\vc\configs\__init__.py -> temp_build\TTS\vc\configs
  copying TTS\vc\configs\freevc_config.py -> temp_build\TTS\vc\configs
  copying TTS\vc\configs\shared_configs.py -> temp_build\TTS\vc\configs
  creating temp_build\TTS\vc\models     
  copying TTS\vc\models\__init__.py -> temp_build\TTS\vc\models
  copying TTS\vc\models\base_vc.py -> temp_build\TTS\vc\models
  copying TTS\vc\models\freevc.py -> temp_build\TTS\vc\models
  creating temp_build\TTS\vc\modules    
  copying TTS\vc\modules\__init__.py -> temp_build\TTS\vc\modules
  creating temp_build\TTS\vc\modules\freevc
  copying TTS\vc\modules\freevc\__init__.py -> temp_build\TTS\vc\modules\freevc 
  copying TTS\vc\modules\freevc\commons.py -> temp_build\TTS\vc\modules\freevc  
  copying TTS\vc\modules\freevc\mel_processing.py -> temp_build\TTS\vc\modules\freevc
  copying TTS\vc\modules\freevc\modules.py -> temp_build\TTS\vc\modules\freevc  
  creating temp_build\TTS\vc\modules\freevc\speaker_encoder
  copying TTS\vc\modules\freevc\speaker_encoder\__init__.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
  copying TTS\vc\modules\freevc\speaker_encoder\audio.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
  copying TTS\vc\modules\freevc\speaker_encoder\hparams.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder
  copying TTS\vc\modules\freevc\speaker_encoder\speaker_encoder.py -> temp_build\TTS\vc\modules\freevc\speaker_encoder  
  creating temp_build\TTS\vc\modules\freevc\wavlm
  copying TTS\vc\modules\freevc\wavlm\__init__.py -> temp_build\TTS\vc\modules\freevc\wavlm
  copying TTS\vc\modules\freevc\wavlm\config.json -> temp_build\TTS\vc\modules\freevc\wavlm
  copying TTS\vc\modules\freevc\wavlm\modules.py -> temp_build\TTS\vc\modules\freevc\wavlm
  copying TTS\vc\modules\freevc\wavlm\wavlm.py -> temp_build\TTS\vc\modules\freevc\wavlm
  creating temp_build\TTS\vocoder       
  copying TTS\vocoder\README.md -> temp_build\TTS\vocoder
  copying TTS\vocoder\__init__.py -> temp_build\TTS\vocoder
  creating temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\__init__.py -> temp_build\TTS\vocoder\configs     
  copying TTS\vocoder\configs\fullband_melgan_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\hifigan_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\melgan_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\multiband_melgan_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\parallel_wavegan_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\shared_configs.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\univnet_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\wavegrad_config.py -> temp_build\TTS\vocoder\configs
  copying TTS\vocoder\configs\wavernn_config.py -> temp_build\TTS\vocoder\configs
  creating temp_build\TTS\vocoder\datasets
  copying TTS\vocoder\datasets\__init__.py -> temp_build\TTS\vocoder\datasets   
  copying TTS\vocoder\datasets\gan_dataset.py -> temp_build\TTS\vocoder\datasets
  copying TTS\vocoder\datasets\preprocess.py -> temp_build\TTS\vocoder\datasets 
  copying TTS\vocoder\datasets\wavegrad_dataset.py -> temp_build\TTS\vocoder\datasets
  copying TTS\vocoder\datasets\wavernn_dataset.py -> temp_build\TTS\vocoder\datasets
  creating temp_build\TTS\vocoder\layers
  copying TTS\vocoder\layers\__init__.py -> temp_build\TTS\vocoder\layers       
  copying TTS\vocoder\layers\hifigan.py -> temp_build\TTS\vocoder\layers        
  copying TTS\vocoder\layers\losses.py -> temp_build\TTS\vocoder\layers
  copying TTS\vocoder\layers\lvc_block.py -> temp_build\TTS\vocoder\layers      
  copying TTS\vocoder\layers\melgan.py -> temp_build\TTS\vocoder\layers
  copying TTS\vocoder\layers\parallel_wavegan.py -> temp_build\TTS\vocoder\layers
  copying TTS\vocoder\layers\pqmf.py -> temp_build\TTS\vocoder\layers
  copying TTS\vocoder\layers\upsample.py -> temp_build\TTS\vocoder\layers       
  copying TTS\vocoder\layers\wavegrad.py -> temp_build\TTS\vocoder\layers       
  creating temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\__init__.py -> temp_build\TTS\vocoder\models       
  copying TTS\vocoder\models\base_vocoder.py -> temp_build\TTS\vocoder\models   
  copying TTS\vocoder\models\fullband_melgan_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\gan.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\hifigan_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\hifigan_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\melgan_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\melgan_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\melgan_multiscale_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\multiband_melgan_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\parallel_wavegan_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\parallel_wavegan_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\random_window_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\univnet_discriminator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\univnet_generator.py -> temp_build\TTS\vocoder\models
  copying TTS\vocoder\models\wavegrad.py -> temp_build\TTS\vocoder\models       
  copying TTS\vocoder\models\wavernn.py -> temp_build\TTS\vocoder\models        
  creating temp_build\TTS\vocoder\utils 
  copying TTS\vocoder\utils\__init__.py -> temp_build\TTS\vocoder\utils
  copying TTS\vocoder\utils\distribution.py -> temp_build\TTS\vocoder\utils     
  copying TTS\vocoder\utils\generic_utils.py -> temp_build\TTS\vocoder\utils    
  running build_ext
  building 'TTS.tts.utils.monotonic_align.core' extension
  error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/  
  ----------------------------------------
  ERROR: Failed building wheel for TTS
Failed to build TTS
ERROR: Could not build wheels for TTS which use PEP 517 and cannot be installed directly
WARNING: You are using pip version 21.2.3; however, version 26.0.1 is available.
You should consider upgrading via the 'C:\Users\sidva\Desktop\TTS\venv\Scripts\python.exe -m pip install --upgrade pip' command.
(venv) PS C:\Users\sidva\Desktop\TTS> 

### Planner Response

It looks like `pip` is still being forced to build the `TTS` package from its raw source code, which completely halts because your Windows system is still missing the C++ compiler. 

For Coqui `TTS` (the local voice cloning library), the developers unfortunately do not always provide pre-compiled Windows files. This means **compiling the C++ code locally on your machine is mandatory**.

You must install the Microsoft C++ Build Tools to proceed. There is no way around this for local voice cloning on native Windows!

### Please follow these exact steps to fix it:

1. **Download the Compiler:**
   Go to this link: [Download Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) and click **"Download Build Tools"**.

2. **Run and Configure the Installer:**
   - Launch the downloaded installer.
   - On the main screen, check the box for **"Desktop development with C++"**.
   - Make sure the install size on the bottom right says roughly **6 GB to 8 GB**.
   - Click **Install** and wait for it to finish completely.

3. **Restart & Upgrade Pip:**
   - Once the installation is finished, **close your current command prompt** (this is vital so it detects the newly installed compiler) and open a new one.
   - Navigate back to the project: `cd c:\Users\sidva\Desktop\TTS`
   - Activate your environment: `venv\Scripts\activate`
   - **Upgrade pip** (your current pip version is very old and might be contributing to the issue):
     ```cmd
     python -m pip install --upgrade pip
     ```
   
4. **Final Installation:**
   - Run the install again:
     ```cmd
     pip install -r requirements.txt
     ```

This time, with the compiler installed, it will successfully build `monotonic_align` and finish the installation!

### User Input

for now then remove voice cloing and keep rest as it is

*Edited relevant file*

*Edited relevant file*

### Planner Response

I have completely updated the project to bypass the C++ requirement while keeping everything else extremely premium.

I removed the `TTS` (Coqui) framework and the voice cloning capability. In its place, I integrated **`edge-tts`**, which accesses Microsoft's Neural text-to-speech engine. 
- It requires **no C++ compilers** at all (it installs instantly).
- It provides incredibly lifelike, high-quality voices.
- I've pre-configured options for multiple languages, along with Male/Female dialects and accents exactly as you requested!

### How to run the new version:

1. Inside your terminal (in the `c:\Users\sidva\Desktop\TTS` folder with your virtual environment activated), simply install the new lightweight requirements:
   ```cmd
   pip install -r requirements.txt
   ```
   *(This will take just a couple of seconds and won't fail!)*

2. Start the Voice Studio:
   ```cmd
   streamlit run app.py
   ```

You will see the new clean interface with the Voice Cloning section removed, but with a wide variety of preset neural voices. Let me know if you'd like to add any other specific languages to the dropdown!

### User Input

increase amount of voices and accents

*User accepted the command `pip install -r requirements.txt`*

*Viewed [app.py](file:///c:/Users/sidva/Desktop/TTS/app.py) *

*Edited relevant file*

### Planner Response

I have massively expanded the database with over 50 different high-quality Neural voices!

The dropdown menu will now automatically populate with deep categorizations for:
- **English**: Separated into US, UK, Australia, Canada, and India options.
- **Spanish**: Separated into Spain, Mexico, and Latin America.
- **French**: Separated into France and Canada.
- **German, Portuguese, Italian, Japanese, Chinese (Mandarin), Hindi, Arabic, and Russian**. 

*(Each category also contains multiple Male and Female voices.)*

Since you already have the Streamlit server running in your terminal, simply click **"R"** on your keyboard while looking at your browser window, or hit the **"Rerun"** button in the top right corner of the Streamlit interface to see the massive new list of voices instantly!

### User Input

do that for hindi too

*User accepted the command `edge-tts --list-voices | Select-String "hi-"`*

*Checked command status*

*User accepted the command `edge-tts --list-voices | Select-String "India"`*

*Checked command status*

*User accepted the command `edge-tts --list-voices > voices.txt`*

*Grep searched codebase*

*Grep searched codebase*

*Edited relevant file*

### Planner Response

Done!

Since Microsoft's true Neural "Hindi" category specifically contains just Swara and Madhur, I have added **all the surrounding regional Indian languages** that the engine supports. 

Your application now directly includes categories for:
- **Hindi** (Swara & Madhur)
- **Bengali** (Tanishaa & Bashkar)
- **Tamil** (Pallavi & Valluvar)
- **Telugu** (Shruti & Mohan)
- **Marathi** (Aarohi & Manohar)
- **Gujarati** (Dhwani & Niranjan)
- **Kannada** (Sapna & Gagan)
- **Malayalam** (Sobhana & Midhun)
- **Urdu (India)** (Gul & Salman)

Just let Streamlit refresh and you'll see all of these populated in the region dropdown instantly!

### User Input

i want all the voices locally on my pc can i download it??

### Planner Response

Because we switched to **`edge-tts`** to bypass your C++ compiler error, the engine is currently streaming these hyper-realistic voices directly from Microsoft's cloud servers. 

So, **the generated audio files are downloaded locally to your PC**, but the **engine & voice models themselves cannot be downloaded completely offline**. They require an internet connection to synthesize the text.

### If you want to work 100% Offline (Without Internet):
To have the actual voice models downloaded permanently to your hard drive so they work without Wi-Fi, you have to use a truly local engine. 

Since you couldn't install the C++ Build Tools for Coqui XTTS earlier, our best offline option is **Piper TTS**:
- **Pros:** Completely offline, requires no C++ compiling, runs fast on Windows, and has many languages.
- **Cons:** You will have to manually download the `.onnx` model files for each voice you want (which take up gigabytes of space), and the voices sound a bit more robotic compared to Microsoft's neural voices.

If you are happy with the realistic quality and don't mind needing an internet connection to generate the audio, I highly recommend sticking with the current `edge-tts` setup! 

Would you like to keep the current setup, or do you want me to rebuild the app using Piper TTS for full offline support?

### User Input

make the whole ui of our project like eleven labs but give it branding soundrangers

*Edited relevant file*

### Planner Response

I've outlined an implementation plan covering the UI overhaul to transform our platform into a sleek, ElevenLabs-inspired application branded as **SoundRangers**.

To match the professional feel of ElevenLabs, I will be moving the voice settings out of the side panel and into a clean, horizontal toolbar right above the central text area.

Please review the plan, and let me know if you have a specific primary color you'd like me to use for the SoundRangers brand (or if a clean, dark Slate / Electric Blue is good). Once you approve, I'll execute the redesign immediately!

### User Input

Smart Voice Filtering: Edge TTS has hundreds of voices. Don't just dump them into one massive dropdown menu. Build a dynamic, multi-step filtering system:

Select Language (e.g., English, Hindi, Marathi)

Select Region (e.g., India, UK, US)

Select Gender

Choose the specific Voice Name.

Granular Audio Controls: Edge TTS allows you to modify the output. Use Streamlit sliders (st.slider) to let users precisely adjust the --rate (e.g., +10%, -20%), --pitch, and --volume before generating the audio.

### Planner Response

I'll build this all in one shot — a full rewrite of `app.py` with the ElevenLabs-inspired SoundRangers branding, smart 4-step voice filtering, and audio control sliders.

*Edited relevant file*

### Planner Response

Done! The entire application has been rebuilt from the ground up. Here's what's new:

### 🎨 SoundRangers Branding + ElevenLabs UI
- Deep **Slate/Black** dark mode (`#0A0A0F`) with **Indigo/Violet** accents (`#6366F1`)
- Clean top nav bar with the **SoundRangers** logo and a "Studio" badge
- Two-column layout: **Voice Config on the left**, **Script + Output on the right** (exactly like ElevenLabs)
- Google Inter font for the premium typographic feel

### 🔽 Smart 4-Step Voice Filtering
Each step only shows valid options based on the previous selection:
1. **Language** (e.g., Hindi, English, Spanish)
2. **Region** (e.g., India, US, UK)
3. **Gender** (Female / Male)
4. **Voice Name** with personality descriptions (e.g., *"Aria — Natural, Conversational"*)

### 🎚️ Audio Controls
- **Speed Slider** — `-50%` to `+100%`
- **Pitch Slider** — `-50Hz` to `+50Hz`
- **Volume Slider** — `-50%` to `+50%`

A live **Voice Summary Badge** shows the currently selected voice and all active settings before you generate.

Hit **"R"** to refresh your Streamlit browser tab to see the new UI!

### User Input

Add a sleek, collapsible sidebar on the left side of the screen. It should use a slightly darker shade of the deep charcoal background to create depth against the main workspace.

Include a subtle toggle button (like a hamburger menu or an arrow) at the top to collapse the sidebar into just icons, maximizing the workspace.

Structure the sidebar links into three distinct categories with small, elegant, all-caps category headers: "CORE TOOLS", "WORKSPACE", and "SETTINGS".

Under "CORE TOOLS", create links for: "Studio Synthesizer", "Document Reader", and "Batch Processor". Include modern, minimalist icons next to each link (e.g., a microphone, a file, and a stack of papers).

Under "WORKSPACE", create links for "Recent History" and "Saved Voices".

Under "SETTINGS", create links for "Audio Preferences" and "Documentation".

Interaction: The active link (e.g., "Studio Synthesizer") should be highlighted with a soft, glowing background using the electric blue/purple accent gradient, while inactive links should be a muted gray that turns bright white on hover.

*Edited relevant file*

### Planner Response

Done! The entire application has been rebuilt with a fully custom sidebar navigation system. Here's what's new:

### 🗂️ Collapsible Sidebar
- **Fixed sidebar** pinned to the left, built entirely in HTML/CSS/JS injected into the Streamlit canvas
- A **chevron arrow toggle button** collapses it into a slim 60px icon rail — expanding the workspace
- Collapsed state persists in `localStorage`, so it remembers your preference across page refreshes
- **Tooltip popups** appear on icon hover when the sidebar is collapsed

### 📋 Navigation Structure
- **CORE TOOLS**: Studio Synthesizer *(main app)*, Document Reader, Batch Processor
- **WORKSPACE**: Recent History, Saved Voices  
- **SETTINGS**: Audio Preferences, Documentation
- **Active link** glows with the indigo/violet gradient accent; inactive links are muted grey → white on hover

### 🔌 Page Router
Each sidebar link routes to its own page. The 3 non-synthesizer pages display elegant "coming soon" placeholder cards — ready for you to expand later.

Hit **"R"** to refresh your browser tab to see the new layout!

### User Input

use more aesthetic css and styling futurestic and allign everything properly