/* eslint-env mocha */
const assert = require('assert');
const Device = require('../server/device');
const FileInfo = require('../server/file-info');

describe('Device', () => {
  it('scanimage-a1.txt', () => {
    const file = new FileInfo('test/resource/scanimage-a1.txt');
    const device = Device.from(file.toText());

    assert.strictEqual(device.id, 'plustek:libusb:001:008');
    assert.deepStrictEqual(device.features['--mode'].options, ['Lineart', 'Gray', 'Color']);
    assert.strictEqual(device.features['--mode'].default, 'Color');
    assert.deepStrictEqual(device.features['--resolution'].options, [50, 75, 150, 300, 600, 1200]);
    assert.strictEqual(device.features['--resolution'].default, 50);
    assert.strictEqual(device.features['-l'].limits[0], 0);
    assert.strictEqual(device.features['-l'].limits[1], 215);
    assert.strictEqual(device.features['-l'].default, 0);
    assert.strictEqual(device.features['-t'].limits[0], 0);
    assert.strictEqual(device.features['-t'].limits[1], 297);
    assert.strictEqual(device.features['-t'].default, 0);
    assert.strictEqual(device.features['-x'].limits[0], 0);
    assert.strictEqual(device.features['-x'].limits[1], 215);
    assert.strictEqual(device.features['-x'].default, 103);
    assert.strictEqual(device.features['-y'].limits[0], 0);
    assert.strictEqual(device.features['-y'].limits[1], 297);
    assert.strictEqual(device.features['-y'].default, 76);
    assert.strictEqual(device.features['--brightness'].limits[0], -100);
    assert.strictEqual(device.features['--brightness'].limits[1], 100);
    assert.strictEqual(device.features['--brightness'].interval, 1);
    assert.strictEqual(device.features['--brightness'].default, 0);
    assert.strictEqual(device.features['--contrast'].limits[0], -100);
    assert.strictEqual(device.features['--contrast'].limits[1], 100);
    assert.strictEqual(device.features['--contrast'].interval, 1);
    assert.strictEqual(device.features['--contrast'].default, 0);
  });

  it('scanimage-a2.txt', () => {
    const file = new FileInfo('test/resource/scanimage-a2.txt');
    const device = Device.from(file.toText());

    assert.strictEqual(device.id, 'epson2:libusb:001:029');
    assert.deepStrictEqual(device.features['--mode'].options, ['Lineart', 'Gray', 'Color']);
    assert.strictEqual(device.features['--mode'].default, 'Lineart');
    assert.deepStrictEqual(device.features['--resolution'].options, [75, 300, 600, 1200]);
    assert.strictEqual(device.features['--resolution'].default, 75);
    assert.strictEqual(device.features['-l'].limits[0], 0);
    assert.strictEqual(device.features['-l'].limits[1], 215);
    assert.strictEqual(device.features['-l'].default, 0);
    assert.strictEqual(device.features['-t'].limits[0], 0);
    assert.strictEqual(device.features['-t'].limits[1], 297);
    assert.strictEqual(device.features['-t'].default, 0);
    assert.strictEqual(device.features['-x'].limits[0], 0);
    assert.strictEqual(device.features['-x'].limits[1], 215);
    assert.strictEqual(device.features['-x'].default, 215);
    assert.strictEqual(device.features['-y'].limits[0], 0);
    assert.strictEqual(device.features['-y'].limits[1], 297);
    assert.strictEqual(device.features['-y'].default, 297);
    assert.strictEqual(device.features['--brightness'], undefined);
    assert.strictEqual(device.features['--contrast'], undefined);
  });

  it('scanimage-a3.txt', () => {
    const file = new FileInfo('test/resource/scanimage-a3.txt');
    const device = Device.from(file.toText());

    assert.strictEqual(device.id, 'magic');
    assert.deepStrictEqual(device.features['--mode'].options, ['Lineart', 'Gray', '24bitColor']);
    assert.strictEqual(device.features['--mode'].default, '24bitColor');
    assert.deepStrictEqual(device.features['--resolution'].options, [75, 300, 600, 1200]);
    assert.strictEqual(device.features['--resolution'].default, 75);
    assert.strictEqual(device.features['-l'].limits[0], 0);
    assert.strictEqual(device.features['-l'].limits[1], 215);
    assert.strictEqual(device.features['-t'].limits[0], 0);
    assert.strictEqual(device.features['-t'].limits[1], 297);
    assert.strictEqual(device.features['-x'].limits[0], 0);
    assert.strictEqual(device.features['-x'].limits[1], 215);
    assert.strictEqual(device.features['-y'].limits[0], 0);
    assert.strictEqual(device.features['-y'].limits[1], 297);
    assert.strictEqual(device.features['--brightness'].limits[0], -50);
    assert.strictEqual(device.features['--brightness'].limits[1], 50);
    assert.strictEqual(device.features['--brightness'].interval, 1);
    assert.strictEqual(device.features['--brightness'].default, 0);
    assert.strictEqual(device.features['--contrast'].limits[0], -50);
    assert.strictEqual(device.features['--contrast'].limits[1], 50);
    assert.strictEqual(device.features['--contrast'].interval, 10);
    assert.strictEqual(device.features['--contrast'].default, 0);
  });

});