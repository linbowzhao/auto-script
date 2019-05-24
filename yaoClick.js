auto.waitFor();
var win = floaty.window(
    <vertical>
        <button id="startbtn" text="开始" w="60" bg="#1ab394" textColor="#ffffff"/>
        <button id="stopbtn" text="停止" w="60" bg="#ed5565" textColor="#ffffff"/>
        <button id="hidebtn" text="隐藏" w="60" bg="#f8ac59" textColor="#ffffff"/>
    </vertical>
);
ui.run(function(){
    var clickthread = ''
    win.startbtn.click(function(){
        clickthread = threads.start(function(){
            console.show()
            var x = console.rawInput("请输入X坐标:")
            console.log(x)
            x = Number(x)
            var y = console.rawInput("请输入Y坐标:")
            console.log(y)
            y = Number(y)
            var count = console.rawInput("请输入循环次数:")
            console.log(count)
            count = Number(count)
            console.hide()
            var current = 0
            var timer = setInterval(()=>{
                if(current + 1 > count) return clearInterval(timer)
                click(x, y)
                current++
            }, 200);
            toast("开启成功！")
            setInterval(()=>{}, 1000);
        });
    })
    win.stopbtn.click(function(){
        clickthread.interrupt()
        toast("关闭成功！")
    })
    win.hidebtn.click(function(){
        win.setPosition(-1000, 0)
        toast("音量下键显示按钮！")
    })
});
auto();
events.observeKey();
events.on("key", function(keyCode, event){
    if(keyCode == keys.volume_down && event.getAction() == event.ACTION_UP){
        win.setPosition(0, 0)
    }
});
setInterval(()=>{}, 1000);