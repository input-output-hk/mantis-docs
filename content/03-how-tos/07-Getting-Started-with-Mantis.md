---
title: Getting Started with Mantis
metaTitle: Getting Started with Mantis
---

## Binaries

Once [Mantis is installed](../install), you have two options to launch Mantis: using the main `mantis` binary or using the `mantis-launcher` helper script. Both files are in the `bin` folder.

```
cd mantis
./bin/mantis
```

The `mantis-launcher` has a required argument, which is the network name Mantis uses when it starts.
```
cd mantis
./bin/mantis-launcher <network-name>
```

## Networks

To run the node, first choose a network. For this, use one of the following command-line options:

* `etc`: Ethereum Classic mainnet
* `mordor`: Mordor testnet
* `sagano`: Mantis testnet with additional ECIP features

## CLI Help 

To show the standard command line help, use the following command.

```
cd <mantis-install-folder>
./mantis -h
```

## Mantis Folders

The Mantis client creates its main folder in your home folder, inside its network name folder.
  
* Linux: `/home/<user>/.mantis/<network-name>`
* macOS: `/User/<user>/.mantis/<network-name>`
* Windows: `C:\Users\<user>\.mantis\<network-name>`  

The Mantis main folder is where the node's database storage, keystore, public/private keys, and logs are stored.
