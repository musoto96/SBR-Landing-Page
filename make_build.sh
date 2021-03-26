#!/usr/bin/bash
echo "Building new production files"
cd client && npm run build && rm -rf ../build && mv ./build ../ && cd ../
echo "Done"
