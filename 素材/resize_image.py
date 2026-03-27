from PIL import Image
import os

# 打开图片
img = Image.open(r"D:\网站\北京\素材\四季福合影_temp.png")

# 目标尺寸 700 x 446
target_width = 700
target_height = 446

# 计算裁剪区域（居中裁剪）
img_width, img_height = img.size
target_ratio = target_width / target_height
img_ratio = img_width / img_height

if img_ratio > target_ratio:
    # 图片太宽，需要裁剪宽度
    new_width = int(img_height * target_ratio)
    left = (img_width - new_width) // 2
    img = img.crop((left, 0, left + new_width, img_height))
else:
    # 图片太高，需要裁剪高度
    new_height = int(img_width / target_ratio)
    top = (img_height - new_height) // 2
    img = img.crop((0, top, img_width, top + new_height))

# 缩放到目标尺寸
img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)

# 保存
output_path = r"D:\网站\北京\素材\四季福员工合影_700x446.png"
img.save(output_path, "PNG")
print(f"图片已保存到: {output_path}")
print(f"尺寸: {img.size}")
