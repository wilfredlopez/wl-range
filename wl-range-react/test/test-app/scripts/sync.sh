# Copy angular dist
rm -rf node_modules/wl-range-react/dist
cp -a ../../dist node_modules/wl-range-react
cp -a ../../package.json node_modules/wl-range-react/package.json

# Copy core dist
rm -rf node_modules/wl-range/dist
rm -rf node_modules/wl-range/loader
cp -a ../../../dist node_modules/wl-range/dist
cp -a ../../../loader node_modules/wl-range/loader
cp -a ../../../package.json node_modules/wl-range/package.json


