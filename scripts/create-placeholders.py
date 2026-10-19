#!/usr/bin/env python3
"""Generate placeholder images for HabitZen product screenshots"""

try:
    from PIL import Image, ImageDraw, ImageFont
    has_pil = True
except ImportError:
    has_pil = False
    print("PIL not available, creating minimal placeholders")

import os

# iPhone 14 Pro dimensions
WIDTH = 1170
HEIGHT = 2532
BASE_PATH = "public/images/products/habitizen"

screens = [
    ("screen-dashboard.png", "Dashboard", "HabitZen\nDashboard"),
    ("screen-create.png", "Create Habit", "Create New\nHabit"),
    ("screen-tracking.png", "Time Tracking", "Track Your\nActivity"),
    ("screen-streaks.png", "Streaks", "Your Streak\nProgress"),
    ("screen-reminders.png", "Reminders", "Set Up to 10\nReminders"),
    ("screen-settings.png", "Settings", "App Settings"),
    ("app-icon.png", "Icon", "HabitZen", 512, 512),
]

def create_placeholder_with_pil(filename, title, text, w=WIDTH, h=HEIGHT):
    """Create a nice gradient placeholder with PIL"""
    # Create gradient background
    img = Image.new('RGB', (w, h))
    draw = ImageDraw.Draw(img)
    
    # Purple gradient (matching theme)
    for y in range(h):
        r = int(30 + (y / h) * 20)
        g = int(20 + (y / h) * 15)
        b = int(50 + (y / h) * 30)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    
    # Try to use a nice font, fall back to default
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80)
        label_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 50)
        watermark_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 40)
    except:
        title_font = ImageFont.load_default()
        label_font = ImageFont.load_default()
        watermark_font = ImageFont.load_default()
    
    # Add centered text
    lines = text.split('\n')
    total_height = len(lines) * 90
    start_y = (h - total_height) // 2
    
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=title_font)
        text_width = bbox[2] - bbox[0]
        x = (w - text_width) // 2
        y = start_y + i * 90
        # Add shadow
        draw.text((x + 3, y + 3), line, fill=(0, 0, 0, 128), font=title_font)
        # Add text
        draw.text((x, y), line, fill=(200, 180, 255), font=title_font)
    
    # Add watermark
    watermark = "PLACEHOLDER"
    bbox = draw.textbbox((0, 0), watermark, font=watermark_font)
    wm_width = bbox[2] - bbox[0]
    draw.text(((w - wm_width) // 2, h - 150), watermark, fill=(150, 130, 200, 180), font=watermark_font)
    
    # Add subtitle
    subtitle = "Replace with real screenshot"
    bbox = draw.textbbox((0, 0), subtitle, font=label_font)
    st_width = bbox[2] - bbox[0]
    draw.text(((w - st_width) // 2, h - 90), subtitle, fill=(120, 100, 180), font=label_font)
    
    # Save
    filepath = os.path.join(BASE_PATH, filename)
    img.save(filepath, 'PNG')
    print(f"Created: {filepath}")

def create_simple_placeholder(filename, title, text, w=WIDTH, h=HEIGHT):
    """Create minimal SVG placeholder (no PIL needed)"""
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{w}" height="{h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#2d1b4e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4a2d6e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#grad)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="80" fill="#c8b4ff" text-anchor="middle" dominant-baseline="middle">{text.replace(chr(10), ' ')}</text>
  <text x="50%" y="80%" font-family="Arial, sans-serif" font-size="40" fill="#7860b0" text-anchor="middle">PLACEHOLDER</text>
  <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="30" fill="#6850a0" text-anchor="middle">Replace with real screenshot</text>
</svg>'''
    
    filepath = os.path.join(BASE_PATH, filename.replace('.png', '.svg'))
    with open(filepath, 'w') as f:
        f.write(svg_content)
    print(f"Created: {filepath} (SVG fallback)")

# Create directory if needed
os.makedirs(BASE_PATH, exist_ok=True)

# Generate placeholders
for screen in screens:
    filename = screen[0]
    title = screen[1]
    text = screen[2]
    w = screen[3] if len(screen) > 3 else WIDTH
    h = screen[4] if len(screen) > 4 else HEIGHT
    
    if has_pil:
        create_placeholder_with_pil(filename, title, text, w, h)
    else:
        # For SVG we'll convert to PNG using the filename
        print(f"Note: Creating SVG placeholder for {filename} - install Pillow for better placeholders")
        create_simple_placeholder(filename, title, text, w, h)

print("\n✓ Placeholder images created successfully!")
print("Remember to replace these with real screenshots.")
