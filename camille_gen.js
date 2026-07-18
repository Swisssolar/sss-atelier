// CAMILLE — générateur documentaire Swiss Solar System (module chargé depuis sss.modules_code)
// Expose buildOffre(data) et fmt(n). Fichier de transfert temporaire — supprimé du repo après ingestion.
'use strict';
// ============================================================
// CAMILLE — Générateur documentaire Swiss Solar System
// Gabarit officiel : Offre AN-00352 (charte 2026-07-17)
// PDF construit sans dépendance. Montants JAMAIS recalculés.
// ============================================================
const W = {"helvetica": [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584, 350, 556, 350, 222, 556, 333, 1000, 556, 556, 333, 1000, 667, 333, 1000, 350, 611, 350, 350, 222, 222, 333, 333, 350, 556, 1000, 333, 1000, 500, 333, 944, 350, 500, 667, 278, 333, 556, 556, 556, 556, 260, 556, 333, 737, 370, 556, 584, 333, 737, 333, 400, 584, 333, 333, 333, 556, 537, 278, 333, 333, 365, 556, 834, 834, 834, 611, 667, 667, 667, 667, 667, 667, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 500, 556, 556, 556, 556, 278, 278, 278, 278, 556, 556, 556, 556, 556, 556, 556, 584, 611, 556, 556, 556, 556, 500, 556, 500], "helveticaB": [278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584, 350, 556, 350, 278, 556, 500, 1000, 556, 556, 333, 1000, 667, 333, 1000, 350, 611, 350, 350, 278, 278, 500, 500, 350, 556, 1000, 333, 1000, 556, 333, 944, 350, 500, 667, 278, 333, 556, 556, 556, 556, 280, 556, 333, 737, 370, 556, 584, 333, 737, 333, 400, 584, 333, 333, 333, 611, 556, 278, 333, 333, 365, 556, 834, 834, 834, 611, 722, 722, 722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 556, 556, 556, 556, 556, 278, 278, 278, 278, 611, 611, 611, 611, 611, 611, 611, 584, 611, 611, 611, 611, 611, 556, 611, 556]};
const LOGO_B64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCADpAoADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvJfi98V9S8L6lHoeh+VFciNZp7mRA5Tdnaqg8ZwMknPUV61XzL8cv+Si3n/XvB/6DXBmNWVOleDtqfV8G4Ghi8w5MRHmSi3Z7Xulr953Pwk+Leq+ItaGg68Yp5ZkZ7e5RAjZUZKsBx0yQRjpXsNfLvwY/wCSk6T/ANtv/RT19RUstqyqUrzd7MvjTAUMJj1HDxUVKKdlte7Wi6bBRRRXoHyIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVNX1ay0LTp9R1G4W3tYF3SSN2H9STwBVuuF+NGiX+u+Bp4tOjeWW3mjuGiTlpEXOQB3IznHtWdabhByirtHZl2Hp4jFU6NWXLGTSb7JlHTPj14U1DUVs5FvrKN22pcXEaiPPvgkqPcj64r0dWDqGUgg8gjvXxRXrnwg+Kz6VLb+HNcmL2UjCO1uGOTATwEY/3D2Pb6dPKwmZOUuWr16n3vEHBMKNH2+X3fLvF63Xdefl93Z++UUUV7J+bBXz/8evCmpReJBr8VtLPY3MKRtJGpbynXIw2OgIwQfrX0ASBWfceIdGtWKXGrWELDtJcIp/U1zYqjGtDkk7HtZDmdbLsUsRRhzaWa7p/keDfAvwrqd14sh1xraWKwskkzLIpUSOylQq569STjpj3r6Jqjba7pN4wS11OxnY9BFcIx/Q1eowlCNGHLF3Hn+a1cyxXt6sOTSyXl+u4UUUV0niBXnWtfHXwro+pvYot7feU2ySa1RTGD3wSw3Y9uK5L4wfFiSaW58M6DK0cSExXt0pwXPQxoew7E9+g758Z4A7ACvHxeZOMuSl06n6Pw7wXGvS+sY+6UtorR27v9F959laHrlh4j0yDU9MuFntZhlWAwQRwQQeQQeCKvV558DNDv9F8Flr9HhN5cNcxROMFYyqgEjtnGfoRXodenQm501KSs2fD5phqeGxdShRlzRi2kwooorU4AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPGPiz8IGuXl1/w1bFpmJa6soh9893QevqvfqOevl3hnwRrniTWYbC20+7j/eATTSRMiQLnlmJHYdupNfXFNlljgieWV1SNFLMzHAUDkkmvNq5bTnPnvbufZ5fxrjMNhvqziptaRb3Xr3t0EkkjtoGkmkWOONdzO7YCgdSSa8g8afH63tHks/C8CXcg+U3swPlA/wCwvVvqcD61xfxR+KVz4xu5NO06R4dEibAUcG6I/jb/AGfRfxPPTg7OzudRuorSzgluLiVtscUS7mY+wrlxWZSb5KP3/wCR7+QcF0oU1icyV3vy9F/i8/LZdbmprnjPxF4kdm1TWLu4UnPlB9kY+iLgfpWJsX+6v5V7F4X/AGe7y7jS48R3/wBjB5+y2uHkHszngH6A/Wu7s/gh4ItUCyaZLdH+9PcyEn8iB+lYRy/EVfel+J61bi/KMD+5o6pfyJW/Rfdc+Ytqg52rn1xXQaF478S+G2U6brF1HGP+WMjeZGf+Atkflive774HeCbtCItPnsz/AHoLl8j8GJH6V5/4r/Z/1LTo3ufD95/aUa5JtpgEmx/sn7rfpSlgMRS96P4DocWZRmH7mtpfpNK36r77HS+CfjzY6rJHY+I4o9OuG+VbpCfIc/7WeU/HI9xXrCssihlIZSMgg5BFfFk8E1rPJb3ETwzRsUeORSrKR1BB6GvS/hN8VpvDdxDomszmTSJDsilc5NoT05/ueo7dRxmunCZk78lb7/8AM8TiHguHI8Tly21cd7/4f8uvTs+X8aeCNa8OeILu3nsbqWKSZ3guI4mdZlLEg5APPPI65r0L4T/B5zJFr3ia1KBCGtbGVeSezyD+Sn6n0r24EMAQcg8gg0tdVPLacKnO3fyPExvG2MxGEWGjFRdrOS3fp2v1/CwUUUV6J8YFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeP8Ax+8ZvZWUPhizk2y3a+bdlTyIs8J/wIg59l969gNfInjnXG8R+LtV1IsWSS4ZIvaNflX9Bn8a87M6zhS5Vuz7LgjLI4rHe2qK8aav8+n6v5GRZ2dxqF3DZ2kTTXE7iOONersTgCvp/wCG/wAOLHwNpqu6pPq0yj7Rc46f7Ceij9ep9vOP2fPC6Xmp3niG4TctmPs9vkf8tGGWb6hcD/gRr3qscswqUfbS3ex6XHGeTnW/s+i7Rj8Xm97ei/P0CiiivXPzsKKKKAOC+KHwytfGli97ZxpDrUKfupOgnA/5Zv8A0Pb6Zr5nlikgleGaNo5I2KOjjBUg4II9c19q187/AB78MJpHiWHWLdAsOqITIB0EyYBP4gqfqDXjZnhlb20fmfpPA2eT9p/Z1Z3TV4+Vt16W1Xa3mdx8CfGb65ocmh3khe70wDy2Y5LwHhf++T8v0216hXyn8LNbbQfHelT7tsU8v2WXngrJ8vP0bafwr6srqy6s6lKz3Wh4fGeWRweYOdNWjUXN8+v46/MKKKK7z5IKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvJfi/8AFXUvC+ox6HoZjhufKE09y6ByobO1VB4zgZJOeor1qvLvix8Jrrxfexazo00CXyxiKWGZiqyqCdpDYOGGSOeCPTFcuNVV0n7Lc9/hqWCWOi8fbks99r9L+X4X3PLP+FyeOv8AoOt/4Dxf/E1peH/jn4p0/UYpNWuo9RsdwE0TQojBe5UqByPfIqH/AIUX42/59LH/AMC1/wAK0/D3wB1+51KL+23tLSxVgZfKl8ySRe6qAMDPTJ6e9eLCOM5lbm/E/S8TV4c9lLm9la3RRv8AK2t/Q931S8EeiXd5E2Qts8qkd/kJBr40UkqpPUgE19pXFlDc2Mlk4KwyRmIheMKRjj8K85H7PnhAADz9W44/4+F/+Jr0cfhaldx5Oh8bwln2DyyNVYi/vNWsr7X/AMy78C7Rbb4eWkijm5nmlb3O8r/JRXoFZfhnw7Z+FNGg0iweZraDdsMzBm+ZixycDuTWpXdQg4U4xfRHy2aYmOJxlWvHaUm16N6fgFFFFanAFFFFABXmP7Qdok3gmC4K/Pb3sZB9AwZT/MV6dWN4s8KWHjLSTpepPcJAZFlJgcK2V6ckHiscRTdSlKC3Z6WT4uOExtLET2i03bt1PkS3la3uIZlOGjkVwfcEH+lfaSuDGH6AjNeaj9n7wgCD5+rcf9PC/wDxNelhQFCjoBiuPL8LUoc3P1sfRcXZ5hc09i8Nf3ea91be1vyPnTxR8cvEt7q0/wDYtymn2COUiUQq7uoONzFgeT1wOnvWP/wuTx1/0HW/8B4v/ia6TxT8BNbi1aeTQHtbmxlcvGksvlvECc7TkYIHY1j/APCi/G3/AD6WP/gWv+FedUjjOZ3v8rn2mEq8Oexjy+ztb7Sjf531udv8I/izqviLWf7B11o7iWZGe3uUQI2VGSrAcHjJBwOlew15P8KfhFe+FdUOua3LB9qRGjgggYsE3cFmbAyccAD1NesV7GCVVUv3u5+ccTywMsc3l9uSyvba/W3lttpe4UUUV1nzwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVBqF9b6ZY3F9dSCO3t42lkc/wqBk0N21Y4xcmox3Z5f8AHD4g3nh6O00XRrx7a9nHnzyxEb44hwoB7Fjn8F968g/4WJ4w/wChm1X/AL/mqPijX7jxRr97rFzkPcyFlQn/AFaDhV/AACsuvlsTip1Kjkm7dD94yXIcPg8HClUpxc922k9Xv92yOi/4WJ4w/wChm1X/AL/mj/hYnjD/AKGbVf8Av+a52tfwn4dn8V+IrLR4Mj7RJ+8cf8s4xy7fgM/jisY1Kkmopu/qehWwmCpQlUqU4pJXfurZfI9k8PeOtb0D4Rz+INbumuryeV49Nabl3zwpb1AIdv8AdFeTt8RvGLMWPibVMk5OJsD8h0rofjP4igvdcg8PadhNN0OMW6Iv3fMwA3/fIAX8GrzuujFV5cypxk7R09X1PHyLKaDpSxdWlFSqvmtZaRfwr7tX5s6L/hYnjD/oZtV/7/mj/hYnjD/oZtV/7/mudpeTwASfQdTXN7Wp/M/vPc/s7Cf8+o/+Ar/I9n+CnifxNq2sajcarrFxc6RaWpedrptwjbOVIPY4DE+w+lcZ4l+K/iXV9bu7uw1m+srJpCLeCF9gWMfdzjqSOT9a6XxUR8OPhjZeF4yE1bWs3F8R1RONy/8AoKfg1eS111604QjS5nfd/Pp8j5/KcvwuKxFXMPZR5W+WGitaOjl/289vJHRf8LE8Yf8AQzar/wB/zR/wsTxh/wBDNqv/AH/Nc7RXJ7Wp/M/vPoP7Own/AD6j/wCAr/I7jwn418car4l0yytdf1CeWa4RfLlk3oVzltw9NoJNfUFeLfs+eEdsd14ouo+XzbWmR/CD87j6nC/ga9pr6DLYTVLmm9z8h4zxOHnjfYYeCSgrNpJXfXbtt63CiiivQPkAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8g/aB8XfY9Nt/DVtJiW8xNc4PSIH5V/wCBMPyX3r1i+vYNNsp726kEcEEbSyOf4VAyTXyJ4q8Qz+KvEF7rFxkNcyZRD/yzQcKv4AD8c15uZ1+SnyLd/kfa8EZT9axn1ma92nr/ANvdPu3+4yaKKK+dP2QK9Z8AIngHwBqnje5Rft16PsunK3fnAP4sCT7JXnnhXw9P4q8QWWj2+Q1zJh3H/LOMcs34AH8cV1/xn8QwXWs23hrTcJpuhxiBUXoZcAH/AL5AC/XdXXh/3cXWfTRev/APAzf/AGutTy2O0ven/gT2/wC3np6Jnnju8rtJI7O7kszN1Ynkk02iiuQ98K7z4O+F49d8T/2hehRpukL9rnZ/ulhygP4gsfZa4P8AAn2Fet+Jv+Lb/C+z8NoQmsa5me9x95I+Ny/ltT/vqunDRXM6kto6/wCSPFzuvP2UcJRdp1XyryX2pfJfi0cH458USeMPE97qzFvJdvLt1P8ABEvCj8ep9yawKKKwlJybk92erQoQoU40aatGKSXogq9oej3PiDWLPSrMZnu5RGp7Lnqx9gMn8Ko17b+z54R4uvFF1H1zbWmR2/jcfov4NWuGoutUUDz87zOOXYOeIe60Xm3t/m/JHr+jaTbaFpVpplmmy3tYliQewHU+56n61coor6xJJWR/Ps5ynJzk7thRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDyP9oDxd9i0uDw3bSYmvv3txg9IVPA/4Ew/JTXgde3/ABB+DfiTxP4svdXs76xkguNhRZ5GVowFA24CkYGD+dc5/wAM++Lf+fjSP+/7/wDxFfPYyjXq1XLlduh+xcOZllWAwFOl7aKk9Zer3+7b5HmdFemf8M++Lf8An40j/v8Av/8AEVLa/s9eJpLmNbq90yKAsPMdJXZlXvgbRk46c1y/U6/8rPbfEuVpX9vEsfDyNPAfgTVPHV0i/bLtfsunKw684z+LDP0SvKJJHmkeWV2kkdizu3VmJySfqa+jfib8Mr/xPpGjadoNxbW1vpgKC2mYqpG0KpBAPIAI59TXnn/DPvi3/n40j/v+/wD8RXVicLV0pwjovz6niZLn2XyVTGV6qVSo9nuorSK+7X1Z5nRXpn/DPvi3/n40j/v+/wD8RR/wz74t/wCfjSf+/wC//wARXL9Tr/ys9z/WTLP+f8fvM34P+Fk8QeKVvbwKNO0lRdzs/wB0sPuKfxBY+y1i+PPFL+MfFF5qpLeQzeXbKf4Yl4X8+WPu1e6aT8L7jSPhpf8Ahq2vYYtU1BGae6UHYXJHy567do2/iTivN/8Ahn7xb/z8aR/3/f8A+Irqq4SrGlGnGO+r9e3yPDwOf5fWx1XF1qqXL7kE/wCXdy/7efzsjzOivTP+GffFv/PxpH/f9/8A4ij/AIZ98W/8/Gkf9/3/APiK5fqdf+Vnuf6yZZ/z/j95wGi6Rc69q1ppdmuZ7uVYk9Fz1Y+wGSfpX19omkW2gaRaaXZrtgtYliT3x3PuTkn61518KvhJd+DtUn1bWZbSa68vyrdYCWEYP3mJIHJ4H0z616lXs5dhXSi5TWrPzbjPPIY6vGhh5Xpw69G3/ktPvCiiivSPigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooozQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUZoAKKKKACiijNABRRRQAUUUUAFFGaKACiiigAoozRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUZFFABRRRQAUUUUAFFFFABRRmigAoozRkUAFFFGRQAUUUUAFFGaKACiijIoAKKMijIoAKKM0ZFABRRkUZFABRRmjNABRRkUUAFFFFABRRkUZoAKKKKACiiigDzf44fF+H4TeHYZ4II7vV79mjsreQkJwAWkfHO1cjgckkDjkjwHSNE+PnxithrketX1rp05LQvJemyhcesccfJX3I59TWp+2lY3Q8Q+HLwhvssllPAjdhIHBI+uGX8q+gvhZ408PeMfB+mTaFd27CG1iiltUYCS1ZVAKMnUYxj0PagD5k1DVPjj8Bbq2v9Xv7q90x5An+kXJvbSU9dhJ+aMnBx90+ma9tv/G958Z/hRLJ8O9Wj07xJKIXe2F4Ip7MiUeYGI5AIDANjDA16D458IWXj3wrqHhzUJJIre+QI0kQG9CGDBhkEZBArkvhT8C9G+E2o6hfaZqmo3r30KQut0I8KFYsMbVHrQB8tXXir4uWPjX/AIQ278a6zBqou1siJNRYReY2Nvz/AN07hg4719kfDPTfEOkeBtKsfFV215rUMbi6nabzS7b2I+fv8pWvmr9r3wxLovjjSvFVmDH/AGlAEaQdriAjafrtKf8AfFfT/gTxNF4x8G6N4giIxf2kczAfwuR86/gwYfhQBqanqEGladdahdNst7WF55G9FVSxP5Cvge9+L/xK1Nr3V4fFfiC3s3uORFdMscBkLMkY9OFbA/2a+qv2nPE//COfCXUoY323GqumnR4POHOX/wDHFb868k8D/C3+1v2X/EF79n3X+oTPqtse5W2OEA+oWX/vugD6G+FHiw+Nvh3oWuu++e4tVW4Ocnzk+ST/AMeU/nXTXqSyWc6QNtlaNghzjDYOOfrXzt+xp4rF1oet+GJJAWs51voAepjlGGx7Blz/AMDr6PPSgD4W8d698YPhzq8Gj67431Y3s0CzrHa6m0uFLFRngYJKnAr6L+EXhf4naP4a8RQ+MtYmu9Qu41/s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';

const NAVY='#1B2A3B', RED='#C0392B', GREY='#F7F7F7', BEIGE='#FBF7EC', GOLD='#C9A84C', SEP='#DDDDDD', TXT2='#555555';
const PW=595.28, PH=841.89, ML=57, MR=57, CW_=PW-ML-MR; // 481.28
const FOOT_H=52;

function hex(c){ return [parseInt(c.slice(1,3),16)/255, parseInt(c.slice(3,5),16)/255, parseInt(c.slice(5,7),16)/255]; }
function rg(c){ const [r,g,b]=hex(c); return r.toFixed(3)+' '+g.toFixed(3)+' '+b.toFixed(3); }
function fmt(n){ // format suisse 1'234.56 — AFFICHAGE uniquement
  const neg = n<0; n=Math.abs(Number(n));
  const s = n.toFixed(2); const [i,d]=s.split('.');
  const g = i.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  return (neg?'- ':'')+g+'.'+d;
}
// WinAnsi
function enc(s){
  s = String(s).replace(/’/g,'\x92').replace(/‘/g,'\x91').replace(/“/g,'\x93').replace(/”/g,'\x94')
      .replace(/–/g,'\x96').replace(/—/g,'\x97').replace(/•/g,'\x95').replace(/…/g,'\x85').replace(/œ/g,'\x9C').replace(/Œ/g,'\x8C')
      .replace(/ /g,' ');
  let out='';
  for(const ch of s){ const c=ch.codePointAt(0); out += (c<256)? ch : '?'; }
  return out.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
}
function wtext(s, size, bold){
  const tab = bold? W.helveticaB : W.helvetica;
  s = String(s); let w=0;
  for(const ch of s){ let c=ch.codePointAt(0);
    if(c===0x2019||c===0x2018) c=39; if(c===0x2013) c=45;
    w += (c>=32&&c<256)? (tab[c-32]||556) : 556; }
  return w*size/1000;
}
function wrap(s, size, bold, maxw){
  const words = String(s).split(/\s+/).filter(x=>x.length);
  const lines=[]; let cur='';
  for(const w2 of words){
    const t = cur? cur+' '+w2 : w2;
    if(wtext(t,size,bold)<=maxw) cur=t;
    else { if(cur) lines.push(cur); cur=w2; }
  }
  if(cur) lines.push(cur);
  return lines.length?lines:[''];
}

function buildOffre(data){
  // ---------- VALIDATION STRICTE (refus, jamais de correction) ----------
  const ch = data.chiffrage;
  if(!ch || !Array.isArray(ch.positions) || !ch.positions.length) throw new Error('CHIFFRAGE ABSENT ou sans positions');
  for(const k of ['sous_total_ht','tva','ttc','acompte1','acompte2','solde','catalogue_ht']) if(typeof ch[k]!=='number') throw new Error('CHIFFRAGE INCOMPLET : champ '+k+' manquant (Hugo doit le fournir)');
  const near=(a,b)=>Math.abs(a-b)<0.011;
  const sumPos = ch.positions.reduce((s,p)=>s+Number(p.total_ht||0),0);
  if(!near(sumPos, ch.catalogue_ht)) throw new Error('CHIFFRAGE INCOHERENT : somme positions '+sumPos.toFixed(2)+' != catalogue_ht '+ch.catalogue_ht.toFixed(2)+' — Camille ne recalcule pas, dossier refuse');
  if(!near(ch.catalogue_ht + Number(ch.remise||0), ch.sous_total_ht)) throw new Error('CHIFFRAGE INCOHERENT : catalogue+remise != sous_total_ht');
  if(!near(ch.sous_total_ht + ch.tva, ch.ttc)) throw new Error('CHIFFRAGE INCOHERENT : HT+TVA != TTC');
  if(!near(ch.acompte1 + ch.acompte2 + ch.solde, ch.ttc)) throw new Error('CHIFFRAGE INCOHERENT : acomptes != TTC');
  if(!data.numero) throw new Error('NUMERO ABSENT');
  if(!data.client || !data.client.nom) throw new Error('CLIENT ABSENT');

  const numero = String(data.numero);
  // ---------- CONTENU PAR PAGES ----------
  const pages=[]; let ops=[]; let pageNo=1;
  let y = PH-60; // curseur haut
  const resources = ()=>({});
  function newPage(){ pages.push(ops); ops=[]; pageNo++; y=PH-60; topOfFlowPage(); }
  function rect(x,yy,w,h,color){ ops.push('q '+rg(color)+' rg '+x.toFixed(2)+' '+yy.toFixed(2)+' '+w.toFixed(2)+' '+h.toFixed(2)+' re f Q'); }
  function line(x1,y1,x2,y2,color,lw){ ops.push('q '+rg(color)+' RG '+(lw||0.7)+' w '+x1.toFixed(2)+' '+y1.toFixed(2)+' m '+x2.toFixed(2)+' '+y2.toFixed(2)+' l S Q'); }
  function text(x,yy,s,size,opts){ opts=opts||{};
    const f = opts.bold?'/F2':'/F1'; const col = opts.color||NAVY;
    let xx=x;
    if(opts.align==='right') xx = x - wtext(s,size,opts.bold);
    else if(opts.align==='center') xx = x - wtext(s,size,opts.bold)/2;
    ops.push('BT '+f+' '+size+' Tf '+rg(col)+' rg '+xx.toFixed(2)+' '+yy.toFixed(2)+' Td ('+enc(s)+') Tj ET');
    if(opts.strike){ const w2=wtext(s,size,opts.bold); line(xx, yy+size*0.32, xx+w2, yy+size*0.32, opts.color||NAVY, 0.8); }
    return wtext(s,size,opts.bold);
  }
  function footer(pn){
    const fy = 38;
    line(ML, fy+20, PW-MR, fy+20, SEP, 0.7);
    text(ML, fy+9, 'Swiss Solar System Sàrl', 6.5, {bold:true, color:TXT2});
    text(ML+wtext('Swiss Solar System Sàrl',6.5,true)+4, fy+9, ' Rue Antoinette Quinche 4, 1022 Chavannes-près-Renens', 6.5, {color:TXT2});
    text(ML, fy, 'contact@swisssolarsystem.com  ·  +41 21 552 04 40  ·  www.swisssolarsystem.com', 6.5, {color:TXT2});
    text(ML, fy-9, 'N° TVA : CHE-243.775.671  ·  IBAN : CH25 0076 7000 C567 7278 2  ·  BCV', 6.5, {color:TXT2});
    text(PW-MR, fy+9, 'Offre '+numero, 6.5, {bold:true, color:TXT2, align:'right'});
    text(PW-MR, fy, 'Page '+pn, 6.5, {color:TXT2, align:'right'});
  }
  function ensure(h){ if(y-h < FOOT_H+30){ newPage(); } }
  // table header (répété sur chaque page où le tableau continue)
  const colPosX=ML, colPosW=26, colDescX=ML+30, colDescW=270, colQteX=ML+308, colQteW=38, colPuX=ML+352, colPuW=58, colTotX=ML+416, colTotW=CW_-416;
  function tableHeader(){
    ensure(30);
    rect(ML, y-18, CW_, 18, NAVY);
    text(colPosX+4, y-12.5, 'Pos.', 8.5, {bold:true, color:'#FFFFFF'});
    text(colDescX, y-12.5, 'Description', 8.5, {bold:true, color:'#FFFFFF'});
    text(colQteX+colQteW, y-12.5, 'Qté', 8.5, {bold:true, color:'#FFFFFF', align:'right'});
    text(colPuX+colPuW, y-12.5, 'Prix unit.', 8.5, {bold:true, color:'#FFFFFF', align:'right'});
    text(colTotX+colTotW, y-12.5, 'Prix total CHF', 8.5, {bold:true, color:'#FFFFFF', align:'right'});
    y -= 18;
  }
  let tableOpen=false;
  function topOfFlowPage(){ if(tableOpen) tableHeader(); }

  // ---------- PAGE 1 : EN-TÊTE ----------
  // logo (ratio 1200x437)
  const logoW=128, logoH=logoW*233/640;
  ops.push('q '+logoW+' 0 0 '+logoH.toFixed(2)+' '+ML+' '+(PH-58-logoH).toFixed(2)+' cm /Im1 Do Q');
  let yAdr = PH-58-logoH-11;
  text(ML, yAdr, 'Rue Antoinette Quinche 4', 7.5, {color:NAVY}); yAdr-=10;
  text(ML, yAdr, '1022 Chavannes-près-Renens · Suisse', 7.5, {color:NAVY});
  // client à droite
  let yc = PH-70;
  text(PW-MR, yc, data.client.nom, 10, {bold:true, align:'right'}); yc-=13;
  for(const l of (data.client.lignes_adresse||[])){ text(PW-MR, yc, l, 9, {align:'right'}); yc-=12; }
  y = Math.min(yAdr, yc) - 18;
  // ligne rouge
  line(ML, y, PW-MR, y, RED, 2.6); y-=28;
  // titre + méta
  text(ML, y, 'Offre '+numero, 20, {bold:true, color:RED});
  const metaX = ML+300, metaVX = PW-MR;
  let ym = y+2;
  const metas=[['Date :', data.date],['Valable jusqu’au :', data.validite],['Interlocuteur :', data.interlocuteur||'Adson Bailly']];
  for(const [k,v] of metas){ text(metaX, ym, k, 9); text(metaVX, ym, String(v||''), 9, {bold:true, align:'right'}); ym-=13; }
  y-=20;
  // sous-titre technique
  for(const l of wrap(data.titre_projet||'', 10, true, 300)){ text(ML, y, l, 10, {bold:true}); y-=13; }
  y = Math.min(y, ym-6) - 8;
  // salutation + introduction
  if(data.salutation){ text(ML, y, data.salutation, 8.5); y-=15; }
  for(const l of wrap(data.introduction||'', 8.5, false, CW_)){ ensure(12); text(ML, y, l, 8.5); y-=11.5; }
  y-=10;
  // ---------- TABLEAU ----------
  tableOpen=true; tableHeader();
  let alt=false;
  function renderRow(pos, titre, descLines, qte, pu, tot, opts){
    opts=opts||{};
    const titreLines = wrap(titre, 8.5, true, colDescW);
    const body=[]; for(const d of descLines){ for(const l of wrap(d, 8.5, false, colDescW)) body.push(l); }
    const h = 8 + titreLines.length*11 + body.length*10.5 + 6;
    if(y-h < FOOT_H+30){ newPage(); }
    const bg = opts.offert? BEIGE : (alt? GREY : null);
    if(bg) rect(ML, y-h, CW_, h, bg);
    if(opts.offert){ line(ML, y, PW-MR, y, GOLD, 0.8); }
    let yy = y-8-8;
    text(colPosX+4, yy+3, String(pos), 8.5, {bold:true});
    for(let i=0;i<titreLines.length;i++){ text(colDescX, yy, titreLines[i], 8.5, {bold:true}); if(i===0){
      text(colQteX+colQteW, yy, (typeof qte==='number')? qte.toFixed(2) : String(qte), 8.5, {align:'right'});
      text(colPuX+colPuW, yy, fmt(pu), 8.5, {align:'right', strike:!!opts.offert});
      if(opts.offert) text(colTotX+colTotW, yy, 'Offert', 8.5, {align:'right', bold:true, color:RED});
      else text(colTotX+colTotW, yy, fmt(tot), 8.5, {align:'right'});
    } yy-=11; }
    for(const l of body){ text(colDescX, yy, l, 8.5); yy-=10.5; }
    y -= h; alt=!alt;
  }
  for(const p of ch.positions){
    renderRow(p.pos, p.designation, p.description? (Array.isArray(p.description)?p.description:[p.description]) : [], p.qte, p.pu_ht, p.total_ht, {});
  }
  let posSuiv = ch.positions.length;
  for(const o of (ch.offerts||[])){
    posSuiv++;
    renderRow(posSuiv, o.designation, o.description? (Array.isArray(o.description)?o.description:[o.description]) : [], (o.qte!=null?o.qte:1), o.valeur, o.valeur, {offert:true});
  }
  tableOpen=false;
  y-=14;
  // ---------- TOTAUX ----------
  const labX = ML+220, valX = PW-MR;
  function totLine(label, val, opts){ opts=opts||{};
    ensure(16);
    line(labX, y+11, valX, y+11, SEP, 0.6);
    text(valX - 110, y, label, 8.5, {bold:!!opts.bold, color:opts.color||NAVY, align:'right'});
    text(valX, y, val, 8.5, {bold:!!opts.bold, color:opts.color||NAVY, align:'right'});
    y-=15;
  }
  totLine('Prix catalogue HT', fmt(ch.catalogue_ht)+' CHF');
  if(ch.remise && Math.abs(ch.remise)>0.004){ totLine((ch.remise_libelle||'Remise'), '- '+fmt(Math.abs(ch.remise))+' CHF', {color:RED}); }
  totLine('Sous-total HT', fmt(ch.sous_total_ht)+' CHF', {bold:true});
  totLine('TVA 8.1 %', fmt(ch.tva)+' CHF');
  // bandeau TTC
  ensure(34);
  line(ML, y+6, PW-MR, y+6, GOLD, 2.0);
  rect(ML, y-22, CW_, 26, NAVY);
  text(ML+10, y-14, 'MONTANT TOTAL TTC', 11, {bold:true, color:'#FFFFFF'});
  text(PW-MR-10, y-14, fmt(ch.ttc)+' CHF', 12, {bold:true, color:'#FFFFFF', align:'right'});
  y-=34;
  const recap = [];
  recap.push('Prix catalogue TTC compris dans le détail ci-dessus');
  if(data.recap_ligne){ ensure(12); text(PW/2, y, data.recap_ligne, 7.5, {color:TXT2, align:'center'}); y-=16; }
  // ---------- CONDITIONS DE PAIEMENT ----------
  ensure(64);
  text(ML, y, 'Conditions de paiement', 9.5, {bold:true}); y-=14;
  const conds = [
    ['1. Acompte 40 % à la commande (mise en production et planification)', ch.acompte1],
    ['2. Acompte 40 % au début de l’intervention sur site', ch.acompte2],
    ['3. Solde 20 % à la mise en service de l’installation', ch.solde]
  ];
  for(const [t,m] of conds){ ensure(12); text(ML+4, y, t, 8.5); text(PW-MR, y, fmt(m)+' CHF', 8.5, {bold:true, align:'right'}); y-=12.5; }
  y-=8;
  // ---------- DÉLAIS ----------
  ensure(50);
  text(ML, y, 'Délais & planification', 9.5, {bold:true}); y-=14;
  for(const d of (data.delais||['Planification des travaux : 3 à 4 semaines après réception de l’acompte','Durée d’intervention sur site : 1 à 2 jours ouvrables','Mise en service réalisée immédiatement après installation, selon procédures GRD'])){
    for(const l of wrap(d, 8.5, false, CW_)){ ensure(12); text(ML+4, y, l, 8.5); y-=11.5; }
  }
  y-=8;
  // ---------- RÉSERVES [MANQUE] ----------
  const manques = ch.manques||[];
  if(manques.length){
    ensure(30);
    text(ML, y, 'Réserves — informations à confirmer avant validation définitive', 9.5, {bold:true, color:RED}); y-=14;
    for(const m of manques){ for(const l of wrap('•  '+m, 8.5, false, CW_)){ ensure(12); text(ML+4, y, l, 8.5); y-=11.5; } }
    y-=8;
  }
  // ---------- CONCLUSION + SIGNATURE ----------
  for(const l of wrap(data.conclusion||'Chez Swiss Solar System Sàrl, notre mission est de vous offrir une solution solaire fiable, performante et durable. Nous restons à votre entière disposition pour toute question ou ajustement.', 8.5, false, CW_)){ ensure(12); text(ML, y, l, 8.5); y-=11.5; }
  y-=10; ensure(50);
  text(ML, y, 'Cordialement,', 8.5); y-=16;
  text(ML, y, 'Adson Bailly', 9, {bold:true}); y-=12;
  text(ML, y, 'Swiss Solar System Sàrl', 8.5); y-=12;
  text(ML, y-6, 'Source des prix : grille officielle Swiss Solar System (sss.base_connaissances'+(ch.grille_verifiee_le? ', vérifiée le '+ch.grille_verifiee_le:'')+')', 7, {color:TXT2});
  pages.push(ops);
  // footers (avec numéro total connu)
  // ---------- ASSEMBLAGE PDF ----------
  const logo = Buffer.from(LOGO_B64, 'base64');
  const objs=[];
  function obj(s){ objs.push(s); return objs.length; } // 1-based
  const fontR = obj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  const fontB = obj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  const imgObj = obj('<< /Type /XObject /Subtype /Image /Width 640 /Height 233 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+logo.length+' >>\nstream\n@@LOGO@@\nendstream');
  const pageIds=[]; const contentIds=[];
  pages.forEach((p,idx)=>{
    // ajouter le footer à chaque page
    const save={ops:ops}; ops=p; footer(idx+1); ops=save.ops;
    const streamStr = p.join('\n');
    const cid = obj('<< /Length '+Buffer.byteLength(streamStr,'binary')+' >>\nstream\n'+streamStr+'\nendstream');
    contentIds.push(cid);
  });
  const pagesId = objs.length + pages.length + 1;
  pages.forEach((p,idx)=>{
    pageIds.push(obj('<< /Type /Page /Parent '+pagesId+' 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 '+fontR+' 0 R /F2 '+fontB+' 0 R >> /XObject << /Im1 '+imgObj+' 0 R >> >> /Contents '+contentIds[idx]+' 0 R >>'));
  });
  const pagesIdReal = obj('<< /Type /Pages /Kids ['+pageIds.map(i=>i+' 0 R').join(' ')+'] /Count '+pageIds.length+' >>');
  if(pagesIdReal!==pagesId) throw new Error('assemblage: id pages inattendu '+pagesIdReal+' vs '+pagesId);
  const catId = obj('<< /Type /Catalog /Pages '+pagesId+' 0 R >>');
  // sérialisation
  let out = Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n','binary');
  const offsets=[0];
  for(let i=0;i<objs.length;i++){
    offsets.push(out.length);
    let s = objs[i];
    let head = Buffer.from((i+1)+' 0 obj\n','binary');
    if(s.includes('@@LOGO@@')){
      const [a,b] = s.split('@@LOGO@@');
      out = Buffer.concat([out, head, Buffer.from(a,'binary'), logo, Buffer.from(b+'\nendobj\n','binary')]);
    } else {
      out = Buffer.concat([out, head, Buffer.from(s,'latin1'), Buffer.from('\nendobj\n','binary')]);
    }
  }
  const xref = out.length;
  let x = 'xref\n0 '+(objs.length+1)+'\n0000000000 65535 f \n';
  for(let i=1;i<=objs.length;i++){ x += String(offsets[i]).padStart(10,'0')+' 00000 n \n'; }
  x += 'trailer\n<< /Size '+(objs.length+1)+' /Root '+catId+' 0 R >>\nstartxref\n'+xref+'\n%%EOF';
  out = Buffer.concat([out, Buffer.from(x,'binary')]);
  return out;
}


// marqueur d'integrite
const CAMILLE_VERSION = '2026-07-18-1';
