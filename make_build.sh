#!/usr/bin/bash
cd client && npm run build && rm -rf ../build && mv ./build ../ && cd ../
