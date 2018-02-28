#!/bin/bash
echo Hello
particle call porkchop-sandwiches digitalwrite D3,HIGH
sleep 2
echo World
particle call porkchop-sandwiches digitalwrite D5,HIGH
sleep 2
echo Yo
particle call porkchop-sandwiches digitalwrite D7,HIGH