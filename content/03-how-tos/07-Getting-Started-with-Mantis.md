---
title: Getting Started with Mantis
metaTitle: Getting Started with Mantis
---

## Networks

To run the node, first choose a network from this list:

* `etc`: Ethereum Classic mainnet
* `mordor`: Mordor testnet
* `sagano`: Mantis testnet with additional ECIP features

## The wallet GUI

You can start the Mantis wallet through your desktop environment. 
There is a splash screen first, where you have the opportunity to change the network name to connect to:
![splash screen](../images/5-splash-screen.png)

The initial screen looks like this:
![Mantis wallet home](../images/4-Setup-1.png)

## Launching the client from the command line

Once [Mantis is installed](../install), you have two options to launch the Mantis client: using the main `mantis` binary or using the `mantis-launcher` helper script. Both files are in the `bin` folder.

```
cd mantis
./bin/mantis
```

The `mantis-launcher` has a required argument, which is the network name Mantis uses when it starts.
```
cd mantis
./bin/mantis-launcher <network-name>
```


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
