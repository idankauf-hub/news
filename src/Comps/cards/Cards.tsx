import React from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";

const Cards = () => {
  const data = {
    status: "ok",
    totalResults: 34,
    articles: [
      {
        source: {
          id: null,
          name: "One.co.il",
        },
        author: "מערכת ONE",
        title: "כעת: מכבי חיפה מוגרלת במוקדמות הצ'מפיונס - ynet ידיעות אחרונות",
        description:
          "האלופה הוגרלה בסיבוב המוקדמות השלישי, אם וכאשר המשחק הראשון ייערך בארץ. הכירו את היריבה. ב-14:00: הירוקים יוגרלו גם במוקדמות הליגה האירופית",
        url: "https://www.one.co.il/Article/414959.html",
        urlToImage: "https://photo.one.co.il/Image/GG/7,1/1611594.webp",
        publishedAt: "2022-07-18T10:20:03Z",
        content:
          "? -27 , ( ), ()   : . \r\n \" , . , , / / .\r\n ', -2/3 -9 . , ( -16/17 -23/24 ) .\r\n ( )\r\n, . -14:00. . 10 ' .\r\n ?\r\n 2005/06. , . -2006/07, 2:1 .\r\n -13 , . , .\r\n , 11 . , ' , , . - , ' - , , .",
      },
      {
        source: {
          id: null,
          name: "Tgspot.co.il",
        },
        author: "צבי קצבורג",
        title: "וואווי תציג HarmonyOS 3 בסוף החודש - TGspot.co.il",
        description:
          "אנשי וואווי לא מוכנים להיכנע לרגע והם יציגו לראווה את הגרסה החדשה של מערכת ההפעלה שלהם בסוף יולי",
        url: "https://www.tgspot.co.il/huawei-to-announce-harmonyos-3-end-of-july/",
        urlToImage:
          "https://www.tgspot.co.il/wp-content/uploads/2022/07/HarmonyOS-3.jpg",
        publishedAt: "2022-07-18T09:21:55Z",
        content:
          "(Huawei), , . , HarmonyOS 3.\r\n, -27 , , , .\r\n -300 , – , .\r\n, HarmonyOS 3 , MarePad Pro 11 .",
      },
      {
        source: {
          id: null,
          name: "Calcalist.co.il",
        },
        author: null,
        title:
          "רכבי כביש שטח ירוקים: אלפא רומיאו ומרצדס בנץ מציגות דגמים חדשים בישראל - כלכליסט",
        description:
          'הטונאלה של אלפא רומיאו מוצעת בישראל בגרסת מיילד הייבריד ובגרסת פלאג אין הייבריד ומחירה נע בין 229-289 אלף שקל. המרצדס EQB הוא רכב כביש שטח חשמלי שמגיע עד לטווח של 423 ק"מ. מחירו נע בין 349-429 אלף שקל',
        url: "https://www.calcalist.co.il/local_news/car/article/sy008n9m2c",
        urlToImage:
          "https://images1.calcalist.co.il/picserver3/crop_images/2022/07/18/By3ajqM25/By3ajqM25_232_275_893_503_0_large.jpg",
        publishedAt: "2022-07-18T09:14:51Z",
        content:
          ', EQB, . , EQB 4.68 283 ". -EQB 228 100 " . , , 423 . EQB -349 -429 .\r\nwindow._taboola = window._taboola || [];\r\n _taboola.push({flush: true});',
      },
      {
        source: {
          id: null,
          name: "Sport5.co.il",
        },
        author: null,
        title:
          "Skate 4 יהיה חינם לשחק ויהווה אתחול לסדרת המשחקים - ספורט 5 - ספורט 5",
        description:
          "אולפן Full Circle הדגיש שלא יהיו תיבות שלל או מערכת מיקרו תשלומים פוגענית",
        url: "https://www.sport5.co.il/articles.aspx?FolderID=7901&docID=409081",
        urlToImage:
          "https://www.sport5.co.il/Sip_Storage/FILES/8/size944x700/1208848.jpg",
        publishedAt: "2022-07-18T09:08:00Z",
        content:
          ', -18 2020, 3, EA . , Full Circle, 4, Skate. , " ", , , . \r\n Full Circle, , , .  , DLC . , , , .\r\n , -Full Circle . , , Pay to Win, -DLC.\r\n , () San Vansterdam, San Vanelona.  , , , \' .\r\n , -Skate, F… [+19 chars]',
      },
      {
        source: {
          id: null,
          name: "Gadgety.co.il",
        },
        author: null,
        title:
          "דיווח: זה הוא עיצובו ומפרטו של ה-Galaxy Tab A7 2022 - Gadgety | גאדג'טי",
        description:
          "כמעט שנתיים חלפו להן מאז שסמסונג הכריזה על ה-Galaxy Tab A7 10.4 בספטמבר 2020, ואם אנחנו מתבססים על הדיווח האחרון של המדליף המוכר Snoopy Tech, מחליפו של הטאבלט נמצא ממש מעבר לפינה כשעיצובו המלא ומפרטו נחשפים. על פי הדיווח, אנחנו צפויים לפגוש דור חדש שכמעט זהה …",
        url: "https://www.gadgety.co.il/295667/galaxy-tab-a7-2022-spec-leak/",
        urlToImage:
          "https://www.gadgety.co.il/wp-content/themes/main/thumbs/2022/07/Samsung-Galaxy-Tab-A7-2022-Leak-2.jpg",
        publishedAt: "2022-07-18T08:33:14Z",
        content:
          "-Galaxy Tab A7 10.4 2020, Snoopy Tech, .\r\n , , .\r\n , 10.4 ’, TFT LCD -1200 2000 . -Galaxy Tab A7 , , .\r\n UNISOC T618, -Snapdragon 662 . 3 -, -32 -, 1 - .\r\n 11, OneUI .\r\nSamsung Galaxy Tab A7 2022 (: … [+88 chars]",
      },
      {
        source: {
          id: null,
          name: "Sport5.co.il",
        },
        author: null,
        title:
          "חתום בדם: בליזארד תיתן גישה מוקדמת לבטא של דיאבלו 4 תמורת קעקוע - ספורט 5 - ערוץ הספורט",
        description:
          "חברת הגיימינג נותנת גישה מוקדמת לאלו המוכנים ללכת לקיצון כדי לשחק לפני אחרים",
        url: "https://www.sport5.co.il/articles.aspx?FolderID=7901&docID=409077",
        urlToImage:
          "https://www.sport5.co.il/Sip_Storage/FILES/0/size944x700/1208830.jpg",
        publishedAt: "2022-07-18T08:31:26Z",
        content:
          "4, . -Diablo Hell's Ink.  -16 ', . \r\n . Diablo 4 . -16 -10 , , , . \r\n , 4. -10 , . 4 -2023 . , Diablo Immortal, 2018. \r\n , , , , $110,000 .\r\n Metacritic, , Immortal , . AppMagic, -8 , -24 .",
      },
      {
        source: {
          id: null,
          name: "Globes.co.il",
        },
        author: "אבישי גרינצייג",
        title:
          'עו"ד חדד בחקירה הנגדית של הדס קליין: הפרה חובת נאמנות למעסיקיה - גלובס',
        description:
          "לטענת הסנגור עו\"ד עמית חדד, הדס קליין העבירה את המסמכים לידי חוקרי המשטרה תוך הפרת חובת הנאמנות שלה כלפי המעסיקים שלה ותוך הצגת מצג שווא כלפיהם • השופטים דרשו שיעידו פאקר ומילצ'ן כדי להבין האם קליין העבירה מסמכים בניגוד לרצונם ותוך הפרת חובת הנאמנות",
        url: "https://www.globes.co.il/news/article.aspx?did=1001418358",
        urlToImage:
          "https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1657029272/direct/_H6A7040_rt1938.jpg",
        publishedAt: "2022-07-18T08:30:16Z",
        content: null,
      },
      {
        source: {
          id: "ynet",
          name: "Ynet",
        },
        author: "יוני פרוים",
        title: "יוצאים לאור: אבשלום קור והחברה החדשה גונבים את ההצגה - Pplus",
        description:
          "מר עברית הגיע לפרמיירה של הצגה חדשה עם בת זוגו בחודשים האחרונים - תרצה שקד. הזוגיות החדשה מגיעה אחרי הפרידה מאשתו, שנעשתה בהודעת טקסט. מסרון בשבילכם",
        url: "https://pplus.ynet.co.il/articles/0,7340,L-6160058,00.html",
        urlToImage:
          "https://www.ynet.co.il/PicServer5/2022/07/18/11565505/115654320990100650982no_428X0.jpg",
        publishedAt: "2022-07-18T08:01:00Z",
        content:
          ', , " - - \r\n . . , -71 , , .\r\n , (\') " ", : , , \' . , , , , , .',
      },
      {
        source: {
          id: null,
          name: "Themarker.com",
        },
        author: null,
        title:
          "נייר הטואלט והחיתולים מתייקרים: חברת קימברלי-קלארק מעלה מחירים - TheMarker",
        description: null,
        url: "https://www.themarker.com/consumer/2022-07-18/ty-article/.premium/00000182-103d-d87d-a1da-b27fd3530000",
        urlToImage: null,
        publishedAt: "2022-07-18T08:00:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Mako.co.il",
        },
        author: "מערכת mako סלבס",
        title: "לא ציפינו: ג'ניפר לופז שינתה את השם - mako",
        description:
          "אחרי שלושה חודשים של אירוסים, ו-20 שנים אחרי שהתארסו לראשונה, ג'ניפר לופז ובן אפלק הפכו בשבת לבעל ואישה. הבוקר (שני), ג'ניפר שיתפה את רשמיה מהאירוע המרגש, וחשפה על הדרך כי שינתה את השם המשפחה שלה",
        url: "https://www.mako.co.il/entertainment-celebs/world-2022/Article-1bc3e845f401281027.htm",
        urlToImage: "https://img.mako.co.il/2022/07/18/ben4_autoOrient_i.jpg",
        publishedAt: "2022-07-18T07:59:00Z",
        content:
          ', , \' . , 2002, , , , . , .\r\n , , . \' , , . \' , \' .\r\n" . , , . 20 ", , 2002. " . , . , . - , ".\r\n" . , , , . , . , , -12 , . , . ".\r\n ?',
      },
      {
        source: {
          id: "ynet",
          name: "Ynet",
        },
        author: "ארז דבורה",
        title:
          "פסטיבל הקולנוע ירושלים: כל הסרטים המומלצים - ynet ידיעות אחרונות",
        description:
          "מסע לתוך האפלה של רומניה הרודנית, סאטירה מוצלחת וחריפה שצפויה לעורר לא מעט תחושות אי נוחות בקהל, והקרנת חמשת סרטיו של הבמאי השבדי זוכה פרסי דקל הזהב רובן אוסטלונד, בנוכחותו. הסרטים שאסור לכם לפספס בפסטיבל ירושלים 2022",
        url: "https://www.ynet.co.il/entertainment/article/skbt69b2c",
        urlToImage:
          "https://ynet-images1.yit.co.il/picserver5/crop_images/2022/07/18/Hkg1C9FMh9/Hkg1C9FMh9_0_156_1500_845_0_large.jpg",
        publishedAt: "2022-07-18T07:45:05Z",
        content:
          ', -31 , , , . , (" "), - (""), \'- (" "), \'- (" ") (""). .\r\n. , " " , " , " \' . \', , , \'. -17 ( ) . . , , . . \', . \r\n. ( ) , -Body Horror. . " " , . , "" "". . \r\n, . / The Windshield Wiper " ?", " " \'… [+272 chars]',
      },
      {
        source: {
          id: null,
          name: "Sport5.co.il",
        },
        author: null,
        title:
          "רשמי: אסטריט סלמאני חתם לשלוש עונות בהפועל באר שבע - ספורט 5 - ערוץ הספורט",
        description:
          "מחזיקת הגביע הודיעה על צירופו של החלוץ הקוסוברי אשר שילמה 750 אלף יורו כדי להחתימו בקבוצה: ''נרגש לפתוח פרק חדש''. ברקת תקצה עוד חצי מיליון יורו לחיפוש אחר שני זרים",
        url: "https://www.sport5.co.il/articles.aspx?FolderID=64&docID=409040",
        urlToImage:
          "https://www.sport5.co.il/Sip_Storage/FILES/2/size944x700/1208812.jpg",
        publishedAt: "2022-07-18T07:37:32Z",
        content:
          '() -3 . , . , " 750 .\r\n: " . ". " : " . . ".\r\n -280 21, . , , . , , . , .',
      },
      {
        source: {
          id: "ynet",
          name: "Ynet",
        },
        author: 'אחיה ראב"ד, גלעד מורג',
        title:
          'הערעור נדחה, קסטיאל ישוחרר מהכלא: "אנסת באופן שיטתי, ולא לקחת אחריות" - ynet ידיעות אחרונות',
        description:
          'עבריין המין אלון קסטיאל היה אמור להשתחרר מהכלא בעוד 7 חודשים, אבל בית המשפט דחה את עתירת המדינה לא להעניק לו שחרור מוקדם. באופן חריג, הותר לשרי גולן - אחת מנפגעותיו - לפנות אליו ולבית המשפט: "אני משמיעה צעקה של עשרות נשים. לא נסלח לך על מה שהעברת אותנו. לא בח…',
        url: "https://www.ynet.co.il/news/article/skurxffhq",
        urlToImage:
          "https://ynet-images1.yit.co.il/picserver5/crop_images/2022/07/18/S1XC5tM3q/S1XC5tM3q_0_0_850_479_0_large.jpg",
        publishedAt: "2022-07-18T07:35:00Z",
        content:
          ', , . : " 17 4 . . - . . ".\r\n: " , , , . , . - . . , , . . ".\r\n" , ", . " , . , ". , " , ".\r\n, " , " , , . ? vip , , ".',
      },
      {
        source: {
          id: null,
          name: "Beok.co.il",
        },
        author: "",
        title:
          "כיסא בטיחות נוסף - פורום עגלות תינוקות • BEOK - BeOK פורטל בריאות ויופי",
        description:
          "������:  ���� ���� . ��� ����, ���� ������. ���� �� 4(��� ������) ����� ���� �� ������� ��������, ����� �� �10 ������ �� ���� ����. ����� ����� ������ �� �������� ������",
        url: "https://www.beok.co.il/forums/forum-293/?m=1873564",
        urlToImage: "https://www.beok.co.il/images/fbimage.jpg",
        publishedAt: "2022-07-18T07:19:27Z",
        content: ", .4( ) , 10 ., . , . ?",
      },
      {
        source: {
          id: null,
          name: "Walla.co.il",
        },
        author: "ביני אשכנזי",
        title:
          "הסתיימה ההרשמה להגרלה השנייה של דירה בהנחה: אלו היישובים המבוקשים ביותר - וואלה! חדשות",
        description:
          "יותר ממאה אלף משקי בית נרשמו לסבב הנוכחי של פרויקט הדיור של משרד השיכון שהסתיים הלילה בחצות. התוצאות יפורסמו באוגוסט. בראש טבלת הביקושים נמצאות רמת גן, ראש העין ונתניה. החל ממחר - תיפתח מחדש ההרשמה להנפקת אישור זכאות להגרלה הבאה שצפויה להיפתח באוקטובר",
        url: "https://news.walla.co.il/item/3518925",
        urlToImage:
          "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/4/0/6/3406549-46.jpg",
        publishedAt: "2022-07-18T07:15:00Z",
        content:
          '-112 " " - () . , , -5,500 , -95 -25 . - .\r\n, , 25 . , , 47,675 349 . 42,100 439 .',
      },
      {
        source: {
          id: "ynet",
          name: "Ynet",
        },
        author: "מורן אזולאי, יובל קרני",
        title:
          'סערת "שרשרת נתניהו" והח"כ שהסיר אותה מצווארו: "אני לא עונד שרשראות" - ynet ידיעות אחרונות',
        description:
          '"שרשרת נאמנות" ליו"ר הליכוד נמכרת בגרסאות זהב וכסף, בכנס אתמול ענדה אותה מועמדת בפריימריז על צוואר שר האוצר לשעבר ישראל כ"ץ. הוא הסיר מיד והסביר הבוקר: "לא עונד שרשראות, סילקתי אותה בלי לדעת מה השרשרת הזו"',
        url: "https://www.ynet.co.il/news/article/rkw116pg29",
        urlToImage:
          "https://ynet-images1.yit.co.il/picserver5/crop_images/2022/07/18/r1Vr3OG3q/r1Vr3OG3q_0_0_850_479_0_large.jpg",
        publishedAt: "2022-07-18T06:53:04Z",
        content: "",
      },
      {
        source: {
          id: null,
          name: "Walla.co.il",
        },
        author: "מערכת וואלה! חדשות",
        title:
          'בשיא החופש הגדול: הרכבת לא תפעל בין ת"א לחיפה במשך שבוע - וואלה! חדשות',
        description:
          "רכבת ישראל הודיעה כי החל מיום ראשון הקרוב ועד שבת - לא יינתן שירות רציף לנוסעים בין שתי הערים בשל עבודות על המסילה. מועד העבודות נקבע מראש לקיץ, בהם קיים קיטון טבעי בכמות הנסיעות, אומרים ברכבת. הנוסעים מתוסכלים: לא מבינים איך משביתים לשבוע עבודה שלם",
        url: "https://news.walla.co.il/item/3518902",
        urlToImage:
          "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/1/6/6/3166734-46.jpg",
        publishedAt: "2022-07-18T06:49:00Z",
        content:
          ', . , . \r\n" . , ( - - - ")", . " , 24.7.22 ", 30.7.22 () "". \r\n, " ", .',
      },
      {
        source: {
          id: "ynet",
          name: "Ynet",
        },
        author: "ynet",
        title:
          'התעוררה אחרי שנתיים בקומה, וחשפה: "אחי הוא התוקף" - ynet ידיעות אחרונות',
        description:
          "וונדה פאלמר אותרה מתבוססת בדמה על ספת ביתה במערב וירג'יניה ב-2020, אחרי שהותקפה באכזריות עם מצ'טה או גרזן. אחרי שנתיים בתרדמת התעוררה, ובאמצעות שאלות כן או לא זיהתה את אחיה כתוקף. הוא מואשם בניסיון רצח",
        url: "https://www.ynet.co.il/news/article/hypdaog29",
        urlToImage:
          "https://ynet-images1.yit.co.il/picserver5/crop_images/2022/07/18/HygTjdfhq/HygTjdfhq_0_0_850_479_0_large.jpg",
        publishedAt: "2022-07-18T06:44:47Z",
        content:
          ', -51, \' \', 2020. \' , . , . \r\n: " , ", . " , . , , ", . , .',
      },
      {
        source: {
          id: null,
          name: "Walla.co.il",
        },
        author: "אור שקדי",
        title: "הפועל ירושלים במגעים מתקדמים עם קאדין קרינגטון - וואלה! ספורט",
        description:
          "שחקנה של דיזון בעונה שעברה ימלא את המשבצת שפינה גיילן אדאמס אם יחתום. רשם 13.7 נקודות בממוצע למשחק בליגה הצרפתית",
        url: "https://sports.walla.co.il/item/3518901",
        urlToImage:
          "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/4/1/0/3410643-46.jpg",
        publishedAt: "2022-07-18T06:37:00Z",
        content:
          ", ' , . , ' , .\r\n-26, 1.93 , 2018/19, . . , '.\r\n\", . 13 , 17.",
      },
      {
        source: {
          id: null,
          name: "Themarker.com",
        },
        author: null,
        title: "פרשת יונט קרדיט הפכה ליום הדין של רואי החשבון - TheMarker",
        description: null,
        url: "https://www.themarker.com/markets/2022-07-18/ty-article/00000182-0f8a-dfa7-aba6-afce6dbd0000",
        urlToImage: null,
        publishedAt: "2022-07-18T05:28:00Z",
        content: null,
      },
    ],
  };

  const changeDateForamt = (value: string) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    const d = new Date(value);
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear();
    const formatted = `${dayName} ${monthName} ${date}, ${year}`;
    return formatted
  };
  return (
    <CardsContainer>
      {data.articles.map((item, i) => {
        const date = new Date(item.publishedAt);
        return (
          <Card
            key={i}
            description={item.description!}
            author={item.author!}
            publishedAt={changeDateForamt(item.publishedAt)}
            urlToImage={item.urlToImage!}
            urlToNews={item.url}
            title={item.title}
          ></Card>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
