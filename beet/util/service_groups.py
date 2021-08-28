from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "beet_harvester beet_timelord_launcher beet_timelord beet_farmer beet_full_node beet_wallet".split(),
    "node": "beet_full_node".split(),
    "harvester": "beet_harvester".split(),
    "farmer": "beet_harvester beet_farmer beet_full_node beet_wallet".split(),
    "farmer-no-wallet": "beet_harvester beet_farmer beet_full_node".split(),
    "farmer-only": "beet_farmer".split(),
    "timelord": "beet_timelord_launcher beet_timelord beet_full_node".split(),
    "timelord-only": "beet_timelord".split(),
    "timelord-launcher-only": "beet_timelord_launcher".split(),
    "wallet": "beet_wallet beet_full_node".split(),
    "wallet-only": "beet_wallet".split(),
    "introducer": "beet_introducer".split(),
    "simulator": "beet_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
