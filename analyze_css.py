import os
import re
import json

def analyze_css_usage():
    root_dir = r"c:\Users\LOQ\Desktop\coursework IS\Coursework--EcoMart"
    stats = {
        "external": {"files": 0, "lines": 0, "bytes": 0},
        "internal": {"blocks": 0, "lines": 0, "bytes": 0},
        "inline": {"attributes": 0, "bytes": 0}
    }

    # CSS Files
    css_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".css"):
                css_files.append(os.path.join(root, file))
    
    for css_file in css_files:
        try:
            with open(css_file, 'r', encoding='utf-8') as f:
                content = f.read()
                stats["external"]["files"] += 1
                stats["external"]["bytes"] += len(content)
                stats["external"]["lines"] += len(content.splitlines())
        except Exception as e:
            print(f"Error reading {css_file}: {e}")

    # HTML Files
    html_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))

    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Internal CSS
                # Simple regex for <style>...</style>
                # Note: This is not a full HTML parser, but sufficient for estimation
                style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
                for block in style_blocks:
                    stats["internal"]["blocks"] += 1
                    stats["internal"]["bytes"] += len(block)
                    stats["internal"]["lines"] += len(block.splitlines())

                # Inline CSS
                # Regex for style="..."
                inline_styles = re.findall(r'style=["\'](.*?)["\']', content, re.IGNORECASE)
                for style in inline_styles:
                    stats["inline"]["attributes"] += 1
                    stats["inline"]["bytes"] += len(style)

        except Exception as e:
            print(f"Error reading {html_file}: {e}")

    print(json.dumps(stats, indent=2))

if __name__ == "__main__":
    analyze_css_usage()
