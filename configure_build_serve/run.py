#!/usr/bin/env python3

"""
This is a helper script to configure, build, and serve the web app.

Before running this utility, please make sure that all javascript
dependencies are installed by running `yarn install` in the repository
root dir.

To get help run:
    ./run.py --help
"""

import os
import sys
import argparse
from pathlib import Path
from typing import Optional
from subprocess import Popen
from ghga_service_chassis_lib.config import config_from_yaml
from pydantic import BaseSettings

ROOT_DIR = Path(__file__).parent.parent.resolve()

# define which parameters of the Config class shall not be translated
# into env vars for the React app (as performed by the `set_react_app_env_vars`
# funtion):
IGNORE_PARAMS_FOR_REACT_APP = ["host", "port"]


@config_from_yaml(prefix="metadata_catelogue")
class Config(BaseSettings):
    """Config parameters and their defaults."""
    host: str = "localhost"
    port: int = 8080
    welcome_info: Optional[str]
    svc_search_url: str = "https://dataportal.api.ghga-dev.de/metadata-search"
    svc_repository_url: str = "https://dataportal.api.ghga-dev.de/metadata"


def simplelog(text: str):
    print(f"\n>>> {text}\n")


def set_react_app_env_vars(config: Config):
    """This will translate the parameters from a Config object into environment 
    variables that are picked up by the create-react-app framework.
    """

    simplelog("Setting env vars for use in React App:")
    for name, value in config.dict().items():
        if (
            name not in IGNORE_PARAMS_FOR_REACT_APP and
            value is not None
        ):
            env_var_name = f"REACT_APP_{name.upper()}"
            os.environ[env_var_name] = str(value)
            print(f"  - set {name} as {env_var_name}")


def build():
    """Builds a production ready version of the web app"""

    simplelog("Executing `yarn build`")
    cmd_build = [
        "yarn",
        "--cwd",
        str(ROOT_DIR),
        "build"
    ]
    exit_code_build = Popen(cmd_build).wait()

    if exit_code_build != 0:
        raise RuntimeError(
            f"`yarn` terminated with non-zero exit code: {exit_code_build}."
        )


def serve(config: Config):
    """Serves a production ready build of the web app"""

    simplelog("Making the `serve` package globally available:")
    cmd_add_serve = [
        "yarn",
        "global",
        "add",
        "serve",
    ]
    exit_code_add_serve = Popen(cmd_add_serve).wait()

    if exit_code_add_serve != 0:
        raise RuntimeError(
            f"`yarn` terminated with non-zero exit code: {exit_code_add_serve}."
        )

    simplelog("serve forever:")
    cmd_serve = [
        "serve",
        "--no-clipboard",
        "--listen",
        f"tcp://{config.host}:{config.port}",
        "-s",
        str(ROOT_DIR / "build"),
    ]
    exit_code_serve = Popen(cmd_serve).wait()

    raise RuntimeError(
        f"Serving of app was interupted: {exit_code_serve}."
    )


def dev_serve(config: Config):
    """Runs the web app using a development server"""

    # set environment variables for dev server:
    os.environ["HOST"] = config.host
    os.environ["PORT"] = str(config.port)

    simplelog("Serve forever:")
    print(
        "\n      --- Attention ---\n"
        "This app is running using a development server.\n"
        "Do not use for production!\n"
    )
    cmd_start = [
        "yarn",
        "--cwd",
        str(ROOT_DIR),
        "start"
    ]
    exit_code_start = Popen(cmd_start).wait()

    raise RuntimeError(
        f"Serving of app was interupted: {exit_code_start}."
    )


def run():
    """Runs this script"""

    # run CLI:
    parser = argparse.ArgumentParser(
        prog="run.py",
        description="""This is a helper script to configure, build, and serve the web app.

        Before running this utility, please make sure that all javascript
        dependencies are installed by running `yarn install` in the repository
        root dir."""
    )

    parser.add_argument(
        '--dev',
        help="""If set, the script will skip the build process and
        will serve a development web server that will reload automatically
        once changes are made to the source code.
        Please Note: do not use this option for production.""",
        action='store_true'
    )

    args = parser.parse_args()

    # create config:
    config = Config()

    # set React App config params:
    set_react_app_env_vars(config)

    if args.dev:
        # run app using development server:
        dev_serve(config)
    else:
        # build and serve production server:
        build()
        serve(config)


if __name__ == "__main__":
    run()
