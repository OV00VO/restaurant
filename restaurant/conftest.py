# Reference in parts below: Code Institute Curriculum and Code Star Project
# Reference in parts below: https://github.com/flatplanet/Django-CRM
# Reference in parts: https://www.pythonpool.com/python-unittest-vs-pytest/
# Notes: Below code is based on the above references, modifed for the project

def pytest_configure(config):
    config.option.DJANGO_SETTINGS_MODULE = 'restaurant.settings'
