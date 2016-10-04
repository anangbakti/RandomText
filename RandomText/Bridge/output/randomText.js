Bridge.assembly("RandomText", function ($asm, globals) {
    "use strict";

    Bridge.define("RandomText.App", {
        statics: {
            kelas: "X IBB 1, X IPA 1, X IPA 2, X IPA 3, X IPA 4, X IPA 5, X IPA 6, X IPA 7, X IPA 8, X IPS 1, X IPS 2, X IPS 3, X IPS 4, X IPS 5, XI IBB 1, XI IPA 1, XI IPA 2, XI IPA 3, XI IPA 4, XI IPA 5, XI IPA 6, XI IPA 7, XI IPA 8, XI IPS 1, XI IPS 2, XI IPS 3, XI IPS 4, XI IPS 5, XII IBB 1, XII IBB 2, XII IPA 1, XII IPA 2, XII IPA 3, XII IPA 4, XII IPA 5, XII IPA 6, XII IPA 7, XII IPA 8, XII IPS 1, XII IPS 2, XII IPS 3, XII IPS 4 ",
            divHasilUrut: null,
            createDivResult: function () {
                RandomText.App.divHasilUrut = Bridge.cast(document.getElementById("divHasilUrut"), HTMLDivElement);
                if (RandomText.App.divHasilUrut == null) {
                    RandomText.App.divHasilUrut = Bridge.merge(document.createElement('div'), {
                        id: "divHasilUrut"
                    } );
                    document.body.appendChild(RandomText.App.divHasilUrut);
                }
                RandomText.App.divHasilUrut.innerHTML = "";
            },
            randomizeKelas: function () {
                var $t;
                RandomText.App.createDivResult();

                var arrKelas = System.Linq.Enumerable.from(RandomText.App.kelas.split(",")).toList(String);
                var jumlahKelas = arrKelas.getCount();
                var rand = new System.Random.ctor();

                var kelasTerpilih = new (System.Collections.Generic.List$1(String))();

                for (var i = 0; i < jumlahKelas; i = (i + 1) | 0) {
                    RandomText.App.addToListKelasTerpilih(arrKelas, kelasTerpilih, rand);
                }

                var sb = new System.Text.StringBuilder();
                var iKelas = 1;
                $t = Bridge.getEnumerator(kelasTerpilih);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    sb.append(System.String.concat(System.String.concat(System.String.concat(System.String.concat("<p>", Bridge.identity(iKelas, (iKelas = (iKelas + 1) | 0))), ". "), item), "</p>"));
                }
                RandomText.App.divHasilUrut.innerHTML = sb.toString();

                kelasTerpilih.clear();
            },
            randomize2GrupKelas: function () {
                var $t;
                RandomText.App.createDivResult();

                var arrKelas = System.Linq.Enumerable.from(RandomText.App.kelas.split(",")).toList(String);
                var jumlahKelas = arrKelas.getCount();
                var rand = new System.Random.ctor();

                var jumlahGroup = 2;
                if (!RandomText.App.isEven(jumlahKelas)) {
                    window.alert("Jumlah Kelas harus genap");
                    return;
                }
                var divideKelasToGroup = (Bridge.Int.div(jumlahKelas, jumlahGroup)) | 0;

                var pasanganKelasList = new (System.Collections.Generic.List$1(RandomText.PasanganKelas))();

                for (var i = 0; i < divideKelasToGroup; i = (i + 1) | 0) {
                    RandomText.App.addToListPasanganKelasTerpilih(arrKelas, pasanganKelasList, rand);
                }

                var sb = new System.Text.StringBuilder();
                var iKelas = 1;
                $t = Bridge.getEnumerator(pasanganKelasList);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    var kelasIni = Bridge.identity(iKelas, (iKelas = (iKelas + 1) | 0));
                    sb.append(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("<p>", kelasIni), ". "), item.getKelas1()), "  VS  "), item.getKelas2()), " </p>"));
                }
                RandomText.App.divHasilUrut.innerHTML = sb.toString();

                pasanganKelasList.clear();
            },
            addToListKelasTerpilih: function (arrKelas, kelasTerpilih, rand) {
                var nomorTerpilih = rand.next$2(0, arrKelas.getCount());
                var kelas = arrKelas.getItem(nomorTerpilih);
                kelasTerpilih.add(kelas);
                arrKelas.remove(kelas);
            },
            addToListPasanganKelasTerpilih: function (arrKelas, pasanganKelasList, rand) {
                var pk = new RandomText.PasanganKelas();

                var nomorTerpilih = rand.next$2(0, arrKelas.getCount());
                var kelas = arrKelas.getItem(nomorTerpilih);
                pk.setKelas1(kelas);
                arrKelas.remove(kelas);

                nomorTerpilih = rand.next$2(0, arrKelas.getCount());
                kelas = arrKelas.getItem(nomorTerpilih);
                pk.setKelas2(kelas);
                arrKelas.remove(kelas);

                pasanganKelasList.add(pk);
            },
            isEven: function (value) {
                return value % 2 === 0;
            }
        },
        $main: function () {
            var divNamaKelas = document.createElement('div');
            divNamaKelas.innerHTML = RandomText.App.kelas;

            var buttonRandomizeKelas = Bridge.merge(document.createElement('button'), {
                innerHTML: "Randomize Kelas"
            } );
            buttonRandomizeKelas.addEventListener("click", RandomText.App.randomizeKelas);

            var buttonRandomize2GroupKelas = Bridge.merge(document.createElement('button'), {
                innerHTML: "Randomize 2 Group Kelas"
            } );
            buttonRandomize2GroupKelas.addEventListener("click", RandomText.App.randomize2GrupKelas);



            // Add the Button to the page
            document.body.appendChild(divNamaKelas);
            document.body.appendChild(buttonRandomizeKelas);
            document.body.appendChild(buttonRandomize2GroupKelas);
        }
    });

    Bridge.define("RandomText.PasanganKelas", {
        config: {
            properties: {
                Kelas1: null,
                Kelas2: null
            }
        }
    });
});
