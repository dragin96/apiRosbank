var faker = require('casual').ru_RU;
var fakerEN = require('casual');

let data = {feed:[]};
const scope = ["Разработка ПО", "Розничная торговля продуктами", "Интернет-магазин", "Рекламная деятельность", "Грузоперевозки", "Разработка и продвижение сайтов", "Розничная торговля одеждой", "Розничная торговля домашней мебелью и товарами для дома", "Розничная торговля офисной мебелью и оборудованием", "Такси", "Рестораны и кафе", "Ремонт и обслуживание компьютеров", "Парикмахерские и салоны красоты", "Услуги фотографа"];
const reviews = ["то что заказала было в наличии что не мало важно. привезли именно тогда когда попросила. практически ко времени. Недостатки: нет", "Перезвонили сразу. Оператор вежливый, предложил доставить товар на день раньше.↵Магазин приятный. Буду рекомендовать. ", "Замечательный магазин! Доброе и внимательное отношение к покупателям. Быстрая и четкая доставка! Очень обаятельный и вежливый курьер!Недостатки: НетКомментарий: Заказывал микроволновую печь Samsung. По телефону всё четко и грамотно рассказали. На следующий день печка была уже у меня. Вся семья очень довольна покупкой. В дальнейшем буду делать заказы в Вашем магазине, и с удовольствием порекомендую его своим знакомым и друзьям. Большое Вам спасибо за отличную работу! ↵С уважением, Александр. ", "Хороший магазин. Быстрая доставка. Качественные товары. Покупал пылесос LG VC53202NHTR,пылесосит! Недостатки: Не обнаружил. Комментарий: Буду покупать в этом магазине и дальше. ", "Менеджер ответил на все интересующие вопросы. Всё по делу. Общение приятное. Доставили на следующий день как сделал заказ. Товар и упаковка в отличном состоянии.  Вышла небольшая разминка с доставкой. Курьер хотел привезти заказ раньше чем я смог встретить, но не смотря на это, он дождался пока я приеду. Недостатки: В целом для себя таких не отметил.", "Быстро обработали заказ. Цена лучшая среди конкурентов Недостатки: Не нашлаКомментарий: Рекомендую магазин", "Хорошо общались, быстро доставили в удобное время.", "Ооочень оперативно. Цены на сайте соответствуют действительности и, реально, дешевле, чем у конкурентов. Качество товара на высоте - мой красавчик пылесос Bosh не разочаровал меня))). Советую данного продавца: на раз, два, три-купили и забыли) как я люблю. Сама ведь была в поисках и сомнениях.Недостатки: НетКомментарий: Магазин заботится о своей репутации. Заметно, что стараются. Спасибо!", "Быстрая связь. Приятные люди. Доставили в срок. Недостатки: НетКомментарий: Брал принтер Canon. Всё хорошо.", "Отличная цена. Отличная доставка, все очень доброжелательно, с пониманием к нуждам клиента.Недостатки: НетКомментарий: Доставка на произошла на следующий день. Интервал времени доставки можно заранее обсудить, не как везде 3-4 дня и сидите целый день дома + отличная цена" ,"Оперативность доставки, цена.Недостатки: НетКомментарий: Приобретал колонку JBL Pulse 3. Доставлено в день заказа, что было важно т.к. приобреталась в подарок. " ,"Быстрая доставка, качество. Советую Комментарий: Заказывала JBL pulse 3, после заказа быстро позвонили, уточнили детали. Курьер позвонил, предупредил, когда приедет. Колонка соответствует действительности, прекрасно работает. " ,"Заказывала телевизор Samsung UE32M5550AU. Достойны похвалы отзывчивость, вежливость и готовность пойти навстречу менеджеров, в частности Александра (отдельное спасибо большое!). Недостатки: нетКомментарий: Товар привезли в неприкосновенной упаковке, вскрыли при мне, проверили и только потом произошел расчет. Это важно! Потому что многие продавцы требуют деньги вперед. Мой совет будущим покупателям - магазин честный, с честными ценами - достойный продавец, покупайте у него.  " ,"Быстро отозвались и оформили заказ. Всё соответствует рекламе на товар. Качество товара радует и глаз и руки.Недостатки: НетКомментарий: Курьерская доставка аккуратна и быстра." ,"Хороший магазин. Быстрая обработка и доставка. Оригинальные товары. Приятные цены.Недостатки: Не обнаружил.Комментарий: Покупал колонку JBL. В этом магазине была самая привлекательная цена. Сделал заказ, сразу перезвонили и выбрали время доставки. Порадовало то, что во время доставки дома меня не было. Курьер оставил заказ консьержу,  а оплатил я через Сбербанк Онлайн. Очень удобно. Рекомендую магазин." ,"Быстро привезли, перезвонили сразу хотя был выходной день.Комментарий: Покупал RGM-M805 Электрогриль Redmond RGM-M805, все работает, готовил овощи , по вкусу как на углях. " ,"В пятницу вечером по телефону сделал заказ на пылесос  Bosch BGN 21800.  Попросила доставку на первую половину дня, В 11 утра на следующий день товар был уже у меня. Большое спасибо отработали очень четко и оперативно!Недостатки: Все очень четкоКомментарий: Недостатков не выявлено" ,"перезвонили через 5 минут, без лишних вопросов приняли заказ. На следующий день вовремя привезли а вот я на полчаса опоздал. Водитель без лишних комментариев меня дождался отдел телевизор поблагодарил за покупку. Было приятно. Недостатки: НетКомментарий: Здорово организованна работа ", " купила не выходя из дома пылесос  Bosch GS 10 BGS1U1805 мощность устраивает . очень нужная и качественная вещьНедостатки: замечаний нет", " Хорошая цена.Быстрая доставкаНедостатки: Нет.Комментарий: Покупал триммер для стрижки . Все было замечательно , чек выдали и гарантия есть.", "  быстрое реагирование, доброжелательность. Самая низкая стоимость колонки jbl charge 3 в МосквеНедостатки: нетКомментарий: Оформлял заказ в воскресенье. В режиме работы указано что в магазине - выходной. На деле менеджер оперативно перезвонил, уточнил информацию и уже на следующий день заказ доставили. Курьер хоть и не русский - по телефону было недопонимание из-за непонятных окончаний - на деле оказался нормальный мужик, добродушный, а не с кислой миной как иногда бывают.", " Первый раз приобретала товары в этом магазине. Первое впечатление очень хорошее! Купила здесь фен-щётку Philips и эпилятор Panasonic. Когда встал вопрос о покупке этих товаров, просмотрела много предложений, в том числе крупных сетевых магазинов. Выбор остановила на STORE 1000.  Цена на нужные мне товары здесь оказалась в разы ниже. В каких-то магазинах была ниже ст-ть доставки, но это не перекрывало выгоду. Доставили в удобное  указанное мной  время, накануне позвонив и всё согласовав. Товар соответствует описанию на сайте, приложены все описания и сертификаты. Качество товаров меня устроило. Эпилятор многофункционален, не очень шумный и просто очень красивый! Пока только начала пользоваться приобретениями и думаю не разочароваться. В следующий раз при необходимости покупки в первую очередь зайду на сайт STORE 1000! Удачи и новых клиентов магазину! Недостатки: Пока недостатков не увидела", " внимание и скорость оформления/доставки - на следующий день, хотя это был выходной, менеджер Александр , если я не ошибаюсь.Недостатки: нетКомментарий: купила пылесос bosch, все отлично. товар соответствует ↵↵↵↵↵", " Очень оперативная обработка заказа, подробная консультация, доставка в назначенное время, цена НИЖЕ, чем в других магазинах :)Недостатки: нетКомментарий: Спасибо огромное за приятную покупку и большущее спасибо за мощь с насадками, в которых мы запутались... Два дня морочили голову менеджеру Александру, что нам попался бракованный товар, а после того как он нам прислал несколько видео по сбору комбайна и фото инструкций что и после чего одевать, поняли, что оказывается одна насадка была уже в сборе, поэтому на нее не садились как положено ножи... Нам было очень стыдно :(↵↵Магазин очень рекомендуем!", " Отличный сервисКомментарий: Подъехали в удобное время.", " Покупала телевизор, все было супер - сразу перезвонили, доставили на следующий день. Я всем довольна. ", " Заказывала телевизор  SAMSUNG UE32M5550AU. Доставили быстро, к товару никаких претензий нет. Телевизор новый, отличный.  Сразу проверили качество изображения и звука. Большое спасибо за отличную работу.Комментарий: Замечательный магазин"]
const logos = ["https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg", "https://image.shutterstock.com/image-vector/s-letter-logo-that-inside-260nw-1143704285.jpg", "https://image.shutterstock.com/image-vector/vector-design-elements-your-company-260nw-709133980.jpg", "https://image.shutterstock.com/image-vector/usable-business-logo-set-100-260nw-169776749.jpg", "https://image.shutterstock.com/image-vector/abstract-cube-logo-design-template-260nw-262214966.jpg", "https://image.shutterstock.com/image-vector/business-finance-professional-logo-template-260nw-562542103.jpg", "https://image.shutterstock.com/image-vector/abstract-handshake-wings-vector-logo-260nw-284565779.jpg", "https://image.shutterstock.com/image-vector/letter-z-logo-icon-symbol-260nw-1138547477.jpg", "https://image.shutterstock.com/image-vector/vector-design-elements-your-company-260nw-571996729.jpg", "https://image.shutterstock.com/image-vector/vector-abstract-colorful-ribbon-logo-260nw-164266115.jpg", "https://image.shutterstock.com/image-vector/faster-logo-template-vector-icon-260nw-563717575.jpg", "https://image.shutterstock.com/image-vector/initial-letter-x-medical-logo-260nw-1193110957.jpg", "https://image.shutterstock.com/image-vector/triangle-shape-design-abstract-business-260nw-1144446164.jpg", "https://image.shutterstock.com/image-vector/marketing-monitor-logo-template-260nw-1182940642.jpg", "https://image.shutterstock.com/image-vector/business-icons-set-isolated-on-260nw-129978278.jpg", "https://image.shutterstock.com/image-vector/letter-logo-260nw-262864910.jpg", "https://image.shutterstock.com/image-vector/global-logo-template-260nw-1012202470.jpg", "https://image.shutterstock.com/image-vector/fox-logo-company-260nw-361743062.jpg", "https://image.shutterstock.com/image-vector/abstract-brain-logo-generate-idea-260nw-336675509.jpg", "https://image.shutterstock.com/image-vector/buildings-icon-company-260nw-536491702.jpg", "https://image.shutterstock.com/image-vector/logo-mega-collection-abstract-geometric-260nw-233266924.jpg", "https://image.shutterstock.com/image-vector/vector-design-elements-your-company-260nw-604688159.jpg", "https://image.shutterstock.com/image-vector/abstract-web-icons-globe-vector-260nw-172380968.jpg", "https://image.shutterstock.com/image-vector/architect-construction-idea-vector-logo-260nw-274413038.jpg", "https://image.shutterstock.com/image-vector/vector-logo-technology-abstract-design-260nw-1022853220.jpg", "https://image.shutterstock.com/image-vector/buildings-icon-company-logo-260nw-274839713.jpg", "https://image.shutterstock.com/image-vector/abstract-logo-designvector-template-260nw-1065273005.jpg", "https://image.shutterstock.com/image-vector/vector-abstract-arrow-logo-icon-260nw-251840218.jpg", "https://image.shutterstock.com/image-vector/logo-badge-label-logotype-elements-260nw-268150292.jpg", "https://image.shutterstock.com/image-vector/logistic-company-vector-logo-arrow-260nw-582998641.jpg", "https://image.shutterstock.com/image-vector/set-corporate-vector-logo-templates-260nw-20277439.jpg", "https://image.shutterstock.com/image-vector/vector-line-building-office-company-260nw-221063911.jpg", "https://image.shutterstock.com/image-vector/mega-collection-vector-logo-design-260nw-220344187.jpg", "https://image.shutterstock.com/image-vector/green-bird-company-logo-business-260nw-417043414.jpg", "https://image.shutterstock.com/image-vector/minimalistic-equalizer-volume-sign-music-260nw-553302502.jpg", "https://image.shutterstock.com/image-vector/vector-design-elements-your-company-260nw-583717939.jpg", "https://image.shutterstock.com/image-vector/global-auditio-logotype-two-arrows-260nw-669754027.jpg", "https://image.shutterstock.com/image-vector/letters-logo-260nw-585722936.jpg", "https://image.shutterstock.com/image-vector/im-m-alphabet-small-letter-260nw-579039586.jpg", "https://image.shutterstock.com/image-vector/logo-vector-set-business-abstract-260nw-16105282.jpg", "https://image.shutterstock.com/image-vector/icon-design-element-business-card-260nw-164158565.jpg", "https://image.shutterstock.com/image-vector/holding-connection-ribbon-abstract-vector-260nw-326897585.jpg", "https://image.shutterstock.com/image-vector/abstract-universal-premium-logo-design-260nw-309635201.jpg", "https://image.shutterstock.com/image-vector/vector-logo-concept-accounting-real-260nw-232181272.jpg", "https://image.shutterstock.com/image-vector/letter-c-tech-logo-circuit-260nw-295715558.jpg", "https://image.shutterstock.com/image-vector/eye-logo-design-vector-template-260nw-350708288.jpg", "https://image.shutterstock.com/image-vector/network-logo-geometric-branding-abstract-260nw-327723959.jpg", "https://image.shutterstock.com/image-vector/real-estate-logo-creative-housingconstructionflippingarchitecture-260nw-427852204.jpg", "https://image.shutterstock.com/image-vector/vector-sign-strip-letter-260nw-319625861.jpg", "https://image.shutterstock.com/image-vector/icon-design-element-business-card-260nw-162488036.jpg", "https://image.shutterstock.com/image-vector/painters-company-name-logo-painting-260nw-1029030907.jpg", "https://image.shutterstock.com/image-vector/mega-collection-abstract-company-logo-260nw-251850856.jpg", "https://image.shutterstock.com/image-vector/creative-people-education-logo-set-260nw-320303060.jpg", "https://image.shutterstock.com/image-vector/globe-data-tech-solution-260nw-693989875.jpg", "https://image.shutterstock.com/image-vector/abstract-graphic-icon-logo-design-260nw-1024964233.jpg", "https://image.shutterstock.com/image-vector/simple-line-house-logo-icon-260nw-392010766.jpg", "https://image.shutterstock.com/image-vector/health-logo-template-260nw-515694094.jpg", "https://image.shutterstock.com/image-vector/abstract-gold-flower-logo-design-260nw-397681270.jpg", "https://image.shutterstock.com/image-vector/vector-icon-buildings-space-text-260nw-113563498.jpg", "https://image.shutterstock.com/image-vector/sp-letters-business-logo-creative-260nw-432154381.jpg", "https://image.shutterstock.com/image-vector/business-icons-set-isolated-on-260nw-138693953.jpg", "https://image.shutterstock.com/image-vector/illustration-blue-globe-city-buildings-260nw-209443990.jpg", "https://image.shutterstock.com/image-vector/code-idea-simple-symbol-programming-260nw-391808536.jpg", "https://image.shutterstock.com/image-vector/vector-abstract-colorful-crystal-triangles-260nw-261254132.jpg", "https://image.shutterstock.com/image-vector/abstract-icon-vector-illustration-260nw-227664199.jpg", "https://image.shutterstock.com/image-vector/d-r-logo-260nw-673060249.jpg", "https://image.shutterstock.com/image-vector/inspiration-company-logo-elements-simple-260nw-258928853.jpg", "https://image.shutterstock.com/image-vector/house-abstract-real-estate-countryside-260nw-247102735.jpg", "https://image.shutterstock.com/image-vector/world-tech-logo-design-template-260nw-523003132.jpg", "https://image.shutterstock.com/image-vector/circle-business-logo-company-name-260nw-626261534.jpg", "https://image.shutterstock.com/image-vector/abstract-icons-set-isolated-on-260nw-134617736.jpg", "https://image.shutterstock.com/image-vector/eye-logo-design-vector-template-260nw-347885405.jpg", "https://image.shutterstock.com/image-vector/financial-advisors-logo-design-template-260nw-1123697642.jpg", "https://image.shutterstock.com/image-vector/logo-elements-260nw-17246389.jpg", "https://image.shutterstock.com/image-vector/green-leaf-ecology-logo-template-260nw-768171688.jpg", "https://image.shutterstock.com/image-vector/technology-laconic-logo-260nw-529950325.jpg", "https://image.shutterstock.com/image-vector/real-estate-initial-letter-b-260nw-763089733.jpg", "https://image.shutterstock.com/image-vector/company-vector-logo-design-template-260nw-254395951.jpg", "https://image.shutterstock.com/image-vector/business-social-relationship-people-communication-260nw-172266605.jpg", "https://image.shutterstock.com/image-illustration/abstract-modern-team-company-logo-260nw-266159396.jpg", "https://image.shutterstock.com/image-vector/human-resource-vector-concept-logo-260nw-259291682.jpg", "https://image.shutterstock.com/image-vector/vector-illustration-abstract-business-logo-260nw-144436003.jpg", "https://image.shutterstock.com/image-vector/letter-r-thunder-design-logo-260nw-1183072684.jpg", "https://image.shutterstock.com/image-vector/lions-head-profile-template-logo-260nw-377128654.jpg", "https://image.shutterstock.com/image-vector/home-shield-logo-260nw-601529891.jpg", "https://image.shutterstock.com/image-vector/logo-collection-04-vector-graphic-260nw-336952286.jpg", "https://image.shutterstock.com/image-vector/logo-mega-collection-abstract-geometric-260nw-252982759.jpg", "https://image.shutterstock.com/image-vector/social-relationship-logo-icon-260nw-142308634.jpg", "https://image.shutterstock.com/image-vector/set-corporate-vector-logo-templates-260nw-20277445.jpg", "https://image.shutterstock.com/image-vector/letter-line-building-logo-260nw-1007720104.jpg", "https://image.shutterstock.com/image-vector/illustration-set-symbol-logo-designing-260nw-111225323.jpg", "https://image.shutterstock.com/image-vector/vector-graphic-geometric-tech-symbol-260nw-244751986.jpg", "https://image.shutterstock.com/image-vector/mega-set-big-group-real-260nw-520378333.jpg", "https://image.shutterstock.com/image-vector/creative-thunder-concept-logo-design-260nw-688383904.jpg", "https://image.shutterstock.com/image-vector/letter-s-logo-design-260nw-1168376752.jpg", "https://image.shutterstock.com/image-vector/icon-design-element-business-card-260nw-179570717.jpg", "https://image.shutterstock.com/image-vector/finance-documents-company-logo-260nw-639722668.jpg", "https://image.shutterstock.com/image-vector/logo-stylized-spherical-surface-abstract-260nw-548032522.jpg", "https://image.shutterstock.com/image-vector/vector-creative-building-construction-house-260nw-158559848.jpg", "https://image.shutterstock.com/image-vector/guardians-logo-template-design-vector-260nw-709141636.jpg", "https://image.shutterstock.com/image-vector/abstract-logo-business-company-corporate-260nw-675153721.jpg", "https://image.shutterstock.com/image-vector/abstract-sinusoidal-signal-black-company-260nw-381960013.jpg", "https://image.shutterstock.com/image-vector/arrow-vector-abstract-logo-design-260nw-776325676.jpg"];
const zadania = [" Требуется сделать рискин игры Circle Crash Добавить Facebook SDK Добавить Appsflyer SDK Добавить Appodeal SDK Прошу в отклике писать стоимость выполнения проекта... ", " Нужно разработать с нуля сайт рекламно-производственной компании, занимающейся в основном нестандартными для локального рынка услугами и технологиями. Цель сайта -... ", " Нужна консультация по выбору темы для WordPress.   Планирую сделать проект на WordPress самостоятельно, есть опыт. Нужна адаптивная гибкая тема, должна которая имеет... ", " Нужна качественная настройка – Yandex Direct  Лендинг – yootema.com/  ", " - прикрутить поддомены (260 городов) в режиме - поставить SSL-сертификат - прописать город для главной страницы (текст для поисковика) - изменить текст в... ", " есть простой хэштэг #banda нужно сделать подарочный мерч с этим хэштэгом:  1. кепка / шапка / снепбек 2. Худи / футболка 3. чехол на айфон все выполнить в черном стиле (хэштэг... ", " Добрый день, нужно составить бизнес-план по тематике . Будем брать транспорт для перевозки песка  и щебня по Санкт-Петербургу и... ", " Нужен специалист по opencat который сможет поменять слайдер на сайте, добавить оплату в интернет магазин. Объяснить мне пару моментов. ", " Привет всем! Необходимо найти блогера по автомобильной тематике и договориться на публикацию статьи об детейлинг-центре за дорогую услугу детейлинга или за определенную сумму. ", " Необходимо отсканированные файлы вручную перевести в текстовый документ (текст печатный, а не рукописный)  Объем 25 листов, шрифт любой стандартный, но 14 размера. По срокам... ", " Необходимо разработать (спроектировать) и напечатать модель крепления для мобильного устройства со следующими габаритами: В*Ш*Г – 16,5*8*2,5. Вес: 400г. ТУ: - возможность... ", " Необходимо сделать презентацию зала в бизнес-центре для выставления предложения на аренду. ", " В форме отправки сообщений с сайта нужно просто поменять адрес отправки сообщений. Нужна помощь в этом. ", " Сайт для ассоциации кросс-маркетинга. Это сайт  база данных компаний, где можно будет получить доступ по логину и паролю (нужна возможность администрирования) на определенный... ", " Есть проект, самописная CRM на symfony в связке с сайтом на MODx нужно сделать очередную итерацию доработок. Список доработок в файле. Мне нужна оценка по срокам и стоимости и... ", " Нужен точный и моментальный повтор действий. То есть у меня  на нем я делаю определенные действия (в интернете), а остальные (компьютеры, удаленные... ", " Нужно придумать оригинальный формат инстамагазина для неоригинальной темы. ", " Добрый день,  Повторяю задание. И это не ВАКАНСИЯ а задание на сегодня. (ув. администраторы данного сайта). Необходимо сегодня перепечатать рецепты с фото в ворд. Начать... ", " Добрый день! Необходимо разработать логотип. Название.  Это услуги по рисованию портретов в мультяшном стиле. В приложении стиль портретов. Желательно... ", " из файла эксель взять артикул и производителя и спарсить самую дешевую цену и ее поставщика с сайтов: яндексмаркет, price.ru, zzap.ru ( c zzap парсить отдельно московский... ", "  написать скрипты продаж – для обычных дней, для Дня матери, для Нового года – для сети инстаграм. Если люди, которые заинтересованы, но почему-то не покупают.   Есть... ", " Видео ролик около шести минут. Работа над роликом еще продолжается. Нужно подобрать музыку продумать переходы, доавить титры. Работа должна быть сдана до 8ми часов, после... ", " Необходимо сделать адаптивную версию сайту одностраничнику astrahan.satya.com.ua/  Пишите в скайп: jony20k  или в вк: vk.com/jonyit Срок 2 дня. ", " Для шоколадной компании нужен логотип ", " Есть браузер, linken sphere Есть апи ls.tenebris.cc/documentat... Премиум имеется.  Прокси тоже. Необходимо написать регистратор аккаунтов для... ", " Нужен баннер. ", " Написать 10 постов в инфостиле  про красную икру  горбуша нерка кета форель кижуч С призывающим действием купить или заказать  Желательно с фото призывом ", " В день поступает более 100 комментариев (в перспективе более 1000). Комментарии нужно проверять на уникальность и выводить процент уникальности в панели администратора. Как... ", " Сегмент B2B: организация и проведение обучения менеджеров по продажам и РОПов навыкам продаж.  Основной продукт – тренинги про продажам, вспомогательные продукты и более... "];
const piar =  ["оптовая торговля отделочными материалами", "игорный бизнес", "оптовая торговля фруктами", "строительство", "системная интеграция", "транспорт и торговля автомобилями", "розничная торговля", "производство редкоземельных и цветных металлов", "системная интеграция", "торговля прокатом и трубами", "Производство электротехнического оборудования", "продажа автомобилей", "реклама", "торговля алкоголем", "продажа предметов роскоши", "производство трансформаторов", "недвижимость, торговля предметами роскоши", "производство автокомпонентов", "добыча угля", "производство майонеза, растительного масла", "универсамы «Патэрсон»", "торговля парфюмерией, косметикой", "Оптовая торговля, одежда", "продажа автомобилей", "поставки газа и нефтяного конденсата", "медиабизнес", "девелопмент", "оптовая торговля фруктами", "оптовая торговля лекарствами", "пиво, безалкогольные напитки", "торговля нефтепродуктами, сервисные услуги", "строительство", "алкогольные и безалкогольные напитки", "производство пряжи и тканей", "производство и продажа спецодежды"]
function generationData(type) {
    let randomData = {
        name: (Math.round(Math.random())) ? 'ИП ' + faker.last_name : `${(Math.round(Math.random())) ? 'ОАО' : 'ООО'} "${fakerEN.last_name}"`,
        location: (Math.round(Math.random())) ? faker.city : 'Вся Россия',
        dataRegistration: faker.date(format = 'DD.MM') + `.${faker.integer(from = 2000, to = 2018)}`,
        rating: faker.integer(from = 1, to = 5), //рейтинг
        isGrowth: Boolean(Math.round(Math.random())), // растет или нет
        scope: scope[faker.integer(from = 0, to = scope.length - 1)], // вид деятельности
        commonPartner: faker.integer(from = 0, to = 4), //общие пртнеры
        phone: faker.phone,
        logo: logos[faker.integer(from = 0, to = logos.length - 1)],// логтип
        review: generationReview()//отзывы
    };
    let tmpObj = {};
    tmpObj = {
        name: (Math.round(Math.random())) ? 'ИП ' + faker.last_name : `${(Math.round(Math.random())) ? 'ОАО' : 'ООО'} "${fakerEN.last_name}"`,
        location: (Math.round(Math.random())) ? 'Санкт-Петербург' : 'Москва',
        date: Date.UTC(2019, faker.integer(from = 0, to = 4),faker.integer(from = 1, to =31 ), 0, 0)/1000,
        logo: logos[faker.integer(from = 0, to = logos.length - 1)],// логтип
        zadania: zadania[faker.integer(from = 0, to = zadania.length - 1)],
        piar: piar[faker.integer(from = 0, to = piar.length - 1)],
        rating: faker.integer(from = 1, to = 10), //рейтинг,
        typeReyt: ['red','red', 'red', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green'][tmpObj.rating-1]
    };
    data[type].push(tmpObj);
}
    // генерация отзывов
    function generationReview(){
        const res = [];
        let review = reviews.filter((el)=>{return Boolean(Math.round(Math.random()))});
        review.forEach(el =>{
            res.push({
                name: (Math.round(Math.random())) ? 'ИП ' + faker.last_name : `${(Math.round(Math.random())) ? 'ОАО': 'ООО'} "${fakerEN.last_name}"`,
                desc: el,
                reyt: faker.integer(from = 0, to = 5)
            })
        });
        return res;
    }
for(let i of "1111111111111111111"){
    generationData('feed');
}
console.log(data)
module.exports = data;