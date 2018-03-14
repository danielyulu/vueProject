<template>
    <div>
        <ul class="title">
            <li>
                <a href="#">
                    <mu-icon value="navigate_before" :size="42" color="#000"/>
                </a>
            </li>
            <li>消息</li>
            <li>
                <a href="#">
                    <mu-icon value="sms" :size="42" color='#FF8F59'/>
                    <span>客服</span>
                </a>
            </li>
        </ul>
        <div class="m_main clearfix">

            <dl class="remind">
                <dt>
                    <span><mu-icon value="event_note"/><b>降价提醒</b></span>
                    <span>2018-1-20 14:05</span>
                </dt>
                <dd>亲爱的xxxxxxxxxxxxxxx哈哈哈大傻逼xxxxxxxxxxxxxxxxxxxxx</dd>
            </dl>
        </div>
    </div>
</template>

<script>
import './message.scss'
export default {
  
}
</script>