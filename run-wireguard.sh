#!/bin/bash
# Script to ensure WireGuard is connected (assumes interface wg0)

WG_INTERFACE="wg0"

# Check if the WireGuard interface is up using wg show
if ! sudo wg show "$WG_INTERFACE" > /dev/null 2>&1; then
    echo "WireGuard interface $WG_INTERFACE is not up. Starting..."
    sudo wg-quick up "$WG_INTERFACE"
else
    echo "WireGuard interface $WG_INTERFACE is already up."
fi
