# app.py
import os

if os.path.exists("env.py"):
    import env

print(os.getenv("envpy_test"))

class BookatableConfig(AppConfig):
    name = 'bookatable'
    template_dirs = [os.path.join(BASE_DIR, 'restaurant/templates')]