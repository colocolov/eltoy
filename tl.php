<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $token = "1692844529:AAHUklC9cXZetDP5nmAmF8xuON05iyCIac8";
    $chat_id = "-440617207";
 
    if (!empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        //$urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;
 
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }
 
        $theme = "Новый заказ на звонок" . "%0A";

        // Формируем текст сообщения
        $txt = $theme . $phone;
 
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }
 
    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: index.html");
}
?>