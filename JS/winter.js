window.addEventListener('load', function () {

    var postArray = [{
        id : 1,
        message : '<iframe src="https://www.youtube.com/embed/dSK6zSl6Ve8" frameborder="0" allowfullscreen></iframe> <p>Cноуборд (сноубординг) - олимпийский вид зимнего спорта, представляет собой спуск по горным склонам на специальной доске, которая называется сноуборд.</p><p>Имеет некую схожесть с серфингом, является ответвлением от горнолыжного спорта.Если сравнивать сноуборд и горные лыжи, то сноубординг уступает в скорости, но выигрывает в маневренности.</p><p> Кроме этого считается, что катание на сноуборде осваивается быстрее, чем спуск на лыжах, плюс сноубординг смотрится несколько «круче» и молодежнее горных лыж.Большинство видов сноубординга не требует отличной от горнолыжного спорта инфраструктуры, а потому катание на сноуборде доступно на всех горнолыжных курортах. Эти факторы обуславливают высокую популярность любительского сноубординга среди молодежи, и едва ли он уступает в ней горным лыжам, если не превосходит их.</p>'
    }, {
        id : 2,
        message : '<iframe src="https://www.youtube.com/embed/jNCO7UvUQBU" frameborder="0" allowfullscreen></iframe>Пришло время кататься на лыжах. Этот раздел поможет Вам в первые дни, начиная с того момента, когда Вы возьмете в аренду (или купите) лыжи, сделаете Ваши первые шаги на снегу и, наконец, встанете на Ваш первый склон.'
    }, {
        id : 3,
        message : "Коньки- это физическая нагрузка и развлечение, тем они и хороши! На катке можно прсото потолкаться с друзьями, погонять в своё удовольствие, нескучно сжигая калории, и даже освоить эелементы фигурного катания. Главное - это просто.Мы предлагаем найти самые лучшие катки с возможностью приятно поесть неподалеку в приятном и красивом месте."
    }, {
        id : 4,
        message : '<iframe src="https://www.youtube.com/embed/UGuluMs0KTE" frameborder="0" allowfullscreen></iframe>Катание на снегоходах – это развлечение, но это также и работа. Снегоход заставляет напрягать тело и разум, и, отчасти, именно поэтому в конце дня, проведенного в седле снегохода, чувствуешь приятную расслабленность. Во время поездки и на водителя, и на пассажира влияет целая совокупность факторов: ветер, солнце, ослепительный ландшафт, холод, вибрация, движение и многое другое. Да, когда вы отправляетесь на снегоходе в сказочный мир зимы, вас ждет очень многое, включая самые разнообразные задачи. Алкоголь усложняет, искажает возникающие задачи и препятствия и быстро может превратить приятную поездку под открытым небом в опасную ситуацию и для вас, и для окружающих. '
    }, {
        id : 5,
        message : '<iframe src="https://www.youtube.com/embed/ysdn2xbvTLo" frameborder="0" allowfullscreen></iframe>Зимний кайтинг – зимний вид спорта (разновидность буксировочного кайтинга), движение по снежной или ледяной поверхности под действием сил тяги кайта и гравитации. Зимний кайтинг в свою очередь делится на кайтинг по равнине (кайтсейлинг или, часто просто зимний кайтинг) и кайтинг при котором используется рельеф (сноукайтинг). В странах, где замерзшая вода является большой редкостью, зимним кайтингом могут называть кайтсерфинг при минусовой температуре'
    }, {}, {
        id : 6,
        message : '<iframe src="https://www.youtube.com/embed/8qmmC5g-1xQ" frameborder="0" allowfullscreen></iframe>Места проведения мероприятий всегда очень живописны и красивы, ведь, чтобы получить максимальное количество впечатлений, зорб спускают с возвышенностей!Прибыв на место, записывайтесь и дождитесь Вашей очереди. Даже если перед Вами в очереди есть несколько человек, не расстраивайтесь! Время пройдет быстро, можно посмотреть как катаются другие, поверьте, со стороны это тоже невероятно интересно. Перед спуском, Вы прослушаете коротенький инструктаж, во время которого Вас попросят влезть внутрь, и надежно зафиксируют креплениями. Вы внутри? Вы вцеплены в крепления в ожидании старта? Замирает дыхание, немного сильнее бьется сердце, что же будет? Сейчас я покачусь с горы вниз в этом чудо агрегате!'

    }, {}, {
        id : 7,
        message : "Устали от городской суеты? Хотите чего-то новенького? Предлагаем вам походы по живописным заснежанным местам. Почувствуйте суровость путешествия пешком, наслаждайтесь утренним снегопадом, зимними красочными вечерами в собственном лагере в окружении близких. По желанию имеются специалисты которые будут всегда с вами!"
    }, {}, {
        id : 8,
        message : '<iframe src="https://www.youtube.com/embed/TzSVI05H04g" frameborder="0" allowfullscreen></iframe>Люитель прокатиться на маутинбайке? Но останавливает приход зимы? Не проблема, даже зимой это возможно! Возьмите зимний , специально адаптированный маутинбайк и прокатитесь по зимним лесам и холмам! Для вас подготовленны масса красочных мест, под любой вкус и сложность трассы.'
    }, {}, {
        id : 9,
        message : '<iframe src="https://www.youtube.com/embed/hcSwkQdC54E" frameborder="0" allowfullscreen></iframe>Покорили все горные стены в городе? Хотите покорять вершины? Мы дадим вам гору, снаряжение, инструкторов, только покорите желаемую вершину! Достигните своих целей, отдохните от карьерных вершин, взаберитесь с самого начала с острыми ощущениями.'
    }, {
    }];

    function imgClickListener(event) {
        var targetId = event.target.id;

        postArray.forEach(function(element) {
            if(element.id == targetId)
                document.getElementById('past').innerHTML = element.message;
        }, this);
    }

    document.body.addEventListener('click', imgClickListener);
});
