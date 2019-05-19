/**
 * 脚本运行环境,autojs版本不要低于3.0,安卓版本不要低于 5.0,低于7.0的手机要root
 *
 * 自动回赞,别人给自己点过几次赞,则回点几次赞.
 */
auto.waitFor();
var topNav = 166
var clickX = device.width/2
var clickY = device.height - 290
var delHeight = 1510
var comHeight = 870
var delBtn = 255 + (device.height - delHeight)/2
var comBtn = 615 + (device.height - comHeight)/2
var number = 1;
while (true) {
    if (number > 100) {
        break;
    } else {
        click(clickX, clickY)
        sleep(1000)
        click(960,delBtn)
        sleep(1000)
        click(740,comBtn)
        sleep(1000)
    }
    number += 1;
}