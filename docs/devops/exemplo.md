# DevOps Example

Este é um exemplo dentro da seção **DevOps**.  
Aqui você pode demonstrar pipelines, automações e integrações.

```yaml
# Exemplo de pipeline CI/CD (GitHub Actions)
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```
