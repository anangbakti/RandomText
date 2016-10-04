using Bridge.Html5;
using System.Collections.Generic;
using System.Text;
using System;
using System.Linq;

namespace RandomText
{
    public class PasanganKelas {
        public string Kelas1 { get; set; }
        public string Kelas2 { get; set; }
    }


    public class App
    {
        public static string Kelas = "X IBB 1, X IPA 1, X IPA 2, X IPA 3, X IPA 4, X IPA 5, X IPA 6, X IPA 7, X IPA 8, X IPS 1, X IPS 2, X IPS 3, X IPS 4, X IPS 5, XI IBB 1, XI IPA 1, XI IPA 2, XI IPA 3, XI IPA 4, XI IPA 5, XI IPA 6, XI IPA 7, XI IPA 8, XI IPS 1, XI IPS 2, XI IPS 3, XI IPS 4, XI IPS 5, XII IBB 1, XII IBB 2, XII IPA 1, XII IPA 2, XII IPA 3, XII IPA 4, XII IPA 5, XII IPA 6, XII IPA 7, XII IPA 8, XII IPS 1, XII IPS 2, XII IPS 3, XII IPS 4 ";
        static HTMLDivElement divHasilUrut;

        public static void Main()
        {
            var divNamaKelas = new HTMLDivElement();
            divNamaKelas.InnerHTML = Kelas;

            var buttonRandomizeKelas = new HTMLButtonElement()
            {
                InnerHTML = "Randomize Kelas"
            };
            buttonRandomizeKelas.AddEventListener(EventType.Click, RandomizeKelas);

            var buttonRandomize2GroupKelas = new HTMLButtonElement()
            {
                InnerHTML = "Randomize 2 Group Kelas"
            };
            buttonRandomize2GroupKelas.AddEventListener(EventType.Click, Randomize2GrupKelas);



            // Add the Button to the page
            Document.Body.AppendChild(divNamaKelas);
            Document.Body.AppendChild(buttonRandomizeKelas);
            Document.Body.AppendChild(buttonRandomize2GroupKelas);
        }

        public static void CreateDivResult() {
            divHasilUrut = (HTMLDivElement)Document.GetElementById("divHasilUrut");
            if (divHasilUrut == null)
            {
                divHasilUrut = new HTMLDivElement()
                {
                    Id = "divHasilUrut"
                };
                Document.Body.AppendChild(divHasilUrut);               
            }
            divHasilUrut.InnerHTML = "";
        }

        public static void RandomizeKelas()
        {
            CreateDivResult(); 
            
            var arrKelas = Kelas.Split(",").ToList();
            var jumlahKelas = arrKelas.Count;
            Random rand = new Random();

            List<string> kelasTerpilih = new List<string>();

            for (int i = 0; i < jumlahKelas; i++)
            {
                AddToListKelasTerpilih(arrKelas, kelasTerpilih, rand);
            }            

            StringBuilder sb = new StringBuilder();
            int iKelas = 1;
            foreach (var item in kelasTerpilih)
            {
                sb.Append("<p>" + iKelas++ +". "+ item + "</p>");
            }
            divHasilUrut.InnerHTML = sb.ToString();

            kelasTerpilih.Clear();
        }

        public static void Randomize2GrupKelas()
        {
            CreateDivResult();

            var arrKelas = Kelas.Split(",").ToList();
            var jumlahKelas = arrKelas.Count;
            Random rand = new Random();

            int jumlahGroup = 2;
            if (!IsEven(jumlahKelas)) {
                Window.Alert("Jumlah Kelas harus genap");
                return;
            }
            var divideKelasToGroup = jumlahKelas / jumlahGroup;

            List<PasanganKelas> pasanganKelasList = new List<PasanganKelas>();
            
            for (int i = 0; i < divideKelasToGroup; i++)
            {
                AddToListPasanganKelasTerpilih(arrKelas, pasanganKelasList, rand);
            }

            StringBuilder sb = new StringBuilder();
            int iKelas = 1;
            foreach (var item in pasanganKelasList)
            {
                var kelasIni = iKelas++;
                sb.Append("<p>" + kelasIni + ". " + item.Kelas1 + "  VS  " + item.Kelas2 + " </p>");
            }
            divHasilUrut.InnerHTML = sb.ToString();

            pasanganKelasList.Clear();
        }

        public static void AddToListKelasTerpilih(List<string> arrKelas, List<string> kelasTerpilih, Random rand) {
            var nomorTerpilih = rand.Next(0, arrKelas.Count);
            var kelas = arrKelas[nomorTerpilih];
            kelasTerpilih.Add(kelas);
            arrKelas.Remove(kelas);
        }

        public static void AddToListPasanganKelasTerpilih(List<string> arrKelas, List<PasanganKelas> pasanganKelasList, Random rand)
        {
            PasanganKelas pk = new PasanganKelas();

            var nomorTerpilih = rand.Next(0, arrKelas.Count);
            var kelas = arrKelas[nomorTerpilih];
            pk.Kelas1 = kelas;
            arrKelas.Remove(kelas);

            nomorTerpilih = rand.Next(0, arrKelas.Count);
            kelas = arrKelas[nomorTerpilih];
            pk.Kelas2 = kelas;
            arrKelas.Remove(kelas);

            pasanganKelasList.Add(pk);
        }

        public static bool IsEven(int value)
        {
            return value % 2 == 0;
        }

    }
}