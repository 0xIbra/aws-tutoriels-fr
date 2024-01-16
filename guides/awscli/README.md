AWS CLI - Guide installation
----------------------------

**Documentation officiel AWS:**  
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions

----

- [Linux](#linux)
- [MacOS](#macos)
- [Windows](#windows)

## Linux

#### Prérequis

- unzip
- glibc
- groff
- less
- python 3

#### Installation

1. Télécharger le fichier d'installation.

```bash
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

2. Décompresser le contenu du fichier zip.

```bash
$ unzip awscliv2.zip
```

3. Exécuter le fichier d'installation avec droits d'admin (sudo).

```bash
$ sudo ./aws/install
```

4. Vérifier le bon fonctionnement.

```bash
$ aws --version
aws-cli/2.10.0 Python/3.11.2 Linux/4.14.133-113.105.amzn2.x86_64 botocore/2.4.5
```