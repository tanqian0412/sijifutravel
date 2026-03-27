from PIL import Image

img = Image.open(r"D:\网站\北京\素材\四季福合影_temp3.png")
target_width, target_height = 400, 500

img_width, img_height = img.size
target_ratio = target_width / target_height
img_ratio = img_width / img_height

if img_ratio > target_ratio:
    new_width = int(img_height * target_ratio)
    left = (img_width - new_width) // 2
    img = img.crop((left, 0, left + new_width, img_height))
else:
    new_height = int(img_width / target_ratio)
    top = (img_height - new_height) // 2
    img = img.crop((0, top, img_width, top + new_height))

img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
img.save(r"D:\网站\北京\素材\四季福员工合影_young.png", "PNG")
print("已保存: 四季福员工合影_young.png")
print(f"尺寸: {img.size} (4:5)")
