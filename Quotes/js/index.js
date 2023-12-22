function quote() {
    var quotes = [
        '“لا تسمح لمجرد يوم واحد جميل ان يشعرك ان لديك حياة سعيدة”',
        '“اذا حلمت بشىء استمر في الحلم فالاحلام مجانيه و انت لن تحققه”',
        '“لو ان راحة البال تشترى بالمال لما استطعنا شرائها ايضا لاننا لا نملك المال”',
        '“تكون الحياة مغلقة في وجهك من جهة و فجاة تجدها اغلقت من الجهة الاخرى”',
        '“هل تعلم ان النهوض باكرا يجعل يومك طويلا فقط ولا يجعلك غنيا”',
        '“لن تحصل يا صديقي على ما تريده بسهوله ولا حتى بصعوبة”',
        '“You have gotta dance like there is nobody watching,Love like you will never be hurt,Sing like there is nobody listening, And live like it is heaven on earth.”',
        '“If you tell the truth, you do not have to remember anything.”',
        '“To live is the rarest thing in the world. Most people exist, that is all.”',
        '“Always forgive your enemies; nothing annoys them so much.”',
        '“Tell me and I forget. Teach me and I remember. Involve me and I learn.”',
        '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        '“It is during our darkest moments that we must focus to see the light.”',
        '“Without music, life would be a mistake.”',
        '“Do not go where the path may lead, go instead where there is no path and leave a trail.”',
        '“You will face many defeats in life, but never let yourself be defeated.”',
        '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
        '“I am so clever that sometimes I don\'t understand a single word of what I am saying.”',
        '“Never let the fear of striking out keep you from playing the game.”',
        '“Life is either a daring adventure or nothing at all.”'
    ];
    var author = [
        '-Unknown',
        '-Unknown',
        '-Unknown',
        '-Unknown',
        '-Unknown',
        '-Unknown',
        '-William W. Purkey',
        '-Mark Twain',
        '-Oscar Wilde',
        '-Oscar Wilde',
        '-Benjamin Franklin',
        '-Mahatma Gandhi',
        '-Friedrich Nietzsche, Twilight of the Idols',
        '-Anne Frank',
        '-Ralph Waldo Emerson',
        '-Maya Angelou',
        '-Nelson Mandela',
        '-Oscar Wilde, The Happy Prince and Other Stories',
        '-Babe Ruth',
        '-Helen Keller'
    ];
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random];
    document.getElementById('author').innerHTML = author[random];
}