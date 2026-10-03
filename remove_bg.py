import os
import subprocess
import sys

def install_and_run():
    try:
        import rembg
    except ImportError:
        print("Installing rembg...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "rembg", "onnxruntime"])
        import rembg
    
    from rembg import remove
    from PIL import Image

    input_dir = r"e:\portfolio\public\assets\minions"
    
    for filename in os.listdir(input_dir):
        if filename.endswith(".png") or filename.endswith(".jpg"):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(input_dir, "temp_" + filename)
            
            print(f"Processing {filename}...")
            try:
                with open(input_path, 'rb') as i:
                    with open(output_path, 'wb') as o:
                        input_data = i.read()
                        output_data = remove(input_data)
                        o.write(output_data)
                
                # Replace original
                os.remove(input_path)
                os.rename(output_path, input_path)
                print(f"Finished {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    install_and_run()
