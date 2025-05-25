const carDB = [
    { name: "Hyundai Avante", budget: "low", bodyType: "sedan", country: "korea", image: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/vehicles/elantra/elantra-22-gallery-exterior-01.jpg" },
    { name: "Hyundai Sonata", budget: "mid", bodyType: "sedan", country: "korea", image: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/vehicles/sonata/sonata-22-gallery-exterior-01.jpg" },
    { name: "Genesis G70", budget: "high", bodyType: "sedan", country: "korea", image: "https://www.genesis.com/content/dam/genesis/ww/en/images/vehicles/g70/g70-2022/exterior/2022-g70-gallery-exterior-01.jpg" },
    { name: "Genesis G80", budget: "premium", bodyType: "sedan", country: "korea", image: "https://www.genesis.com/content/dam/genesis/ww/en/images/vehicles/g80/g80-2022/exterior/2022-g80-gallery-exterior-01.jpg" },
  
    { name: "Kia Seltos", budget: "low", bodyType: "suv", country: "korea", image: "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/suv/seltos/2022/gallery/exterior/01.jpg" },
    { name: "Hyundai Tucson", budget: "mid", bodyType: "suv", country: "korea", image: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/vehicles/tucson/tucson-22-gallery-exterior-01.jpg" },
    { name: "Genesis GV70", budget: "high", bodyType: "suv", country: "korea", image: "https://www.genesis.com/content/dam/genesis/ww/en/images/vehicles/gv70/gv70-2022/exterior/2022-gv70-gallery-exterior-01.jpg" },
    { name: "Genesis GV80", budget: "premium", bodyType: "suv", country: "korea", image: "https://www.genesis.com/content/dam/genesis/ww/en/images/vehicles/gv80/gv80-2022/exterior/2022-gv80-gallery-exterior-01.jpg" },
  
    { name: "Hyundai i30", budget: "low", bodyType: "hatchback", country: "korea", image: "https://cdn.motor1.com/images/mgl/WxEYm/s3/2021-hyundai-i30-n.jpg" },
    { name: "Kia Rio", budget: "mid", bodyType: "hatchback", country: "korea", image: "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/hatchback/rio/2023/gallery/exterior/01.jpg" },
    { name: "Hyundai Veloster", budget: "high", bodyType: "hatchback", country: "korea", image: "https://cdn.motor1.com/images/mgl/qzPvQ/s3/2020-hyundai-veloster.jpg" },
    { name: "Kia Ceed", budget: "premium", bodyType: "hatchback", country: "korea", image: "https://cdn.motor1.com/images/mgl/1p8XN/s3/kia-ceed-gt-2023.jpg" },
  
    { name: "Toyota Corolla", budget: "low", bodyType: "sedan", country: "japan", image: "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2024/corolla/1F7.png" },
    { name: "Honda Accord", budget: "mid", bodyType: "sedan", country: "japan", image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2023/Accord/Global/2023-Honda-Accord-Global-Hero.jpg" },
    { name: "Lexus IS", budget: "high", bodyType: "sedan", country: "japan", image: "https://www.lexus.com/cm-img/gallery/IS/2021/gallery/01_IS_350_F_Sport_001.png" },
    { name: "Acura TLX", budget: "premium", bodyType: "sedan", country: "japan", image: "https://acuranews.com/en-US/releases/acura-2021-tlx-advance-exterior-photos/2021-acura-tlx-advance-exterior-photos-01.jpg" },
  
    { name: "Toyota RAV4", budget: "low", bodyType: "suv", country: "japan", image: "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2023/rav4/027.png" },
    { name: "Honda CR-V", budget: "mid", bodyType: "suv", country: "japan", image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2023/CR-V/Global/2023-Honda-CR-V-Global-Hero.jpg" },
    { name: "Lexus RX", budget: "high", bodyType: "suv", country: "japan", image: "https://www.lexus.com/cm-img/gallery/RX/2022/gallery/02_RX_350_001.png" },
    { name: "Acura MDX", budget: "premium", bodyType: "suv", country: "japan", image: "https://acuranews.com/en-US/releases/2022-acura-mdx-overview/2022-acura-mdx-overview-01.jpg" },
  
    { name: "Honda Fit", budget: "low", bodyType: "hatchback", country: "japan", image: "https://cars.usnews.com/static/images/Auto/izmo/i158568370/2023_honda_fit_angularfront.jpg" },
    { name: "Toyota Yaris", budget: "mid", bodyType: "hatchback", country: "japan", image: "https://cdn.motor1.com/images/mgl/9YxyG/s1/2020-toyota-yaris.jpg" },
    { name: "Mazda3 Hatchback", budget: "high", bodyType: "hatchback", country: "japan", image: "https://cdn.motor1.com/images/mgl/20x5Q/s1/2021-mazda3-hatchback.jpg" },
    { name: "Subaru Impreza", budget: "premium", bodyType: "hatchback", country: "japan", image: "https://cdn.motor1.com/images/mgl/1Bp3q/s3/2022-subaru-impreza.jpg" },
  
    { name: "Ford Fusion", budget: "low", bodyType: "sedan", country: "usa", image: "https://cdn.motor1.com/images/mgl/6NxYb/s1/2019-ford-fusion.jpg" },
    { name: "Chevrolet Malibu", budget: "mid", bodyType: "sedan", country: "usa", image: "https://cdn.motor1.com/images/mgl/YXJq9/s1/2020-chevrolet-malibu.jpg" },
    { name: "Tesla Model 3", budget: "high", bodyType: "sedan", country: "usa", image: "https://cdn.motor1.com/images/mgl/v2oWo/s1/tesla-model-3-2021.jpg" },
    { name: "Cadillac CT5", budget: "premium", bodyType: "sedan", country: "usa", image: "https://cdn.motor1.com/images/mgl/9Np0P/s1/2020-cadillac-ct5.jpg" },
  
    { name: "Ford Escape", budget: "low", bodyType: "suv", country: "usa", image: "https://cdn.motor1.com/images/mgl/0qNXY/s1/2020-ford-escape.jpg" },
    { name: "Jeep Cherokee", budget: "mid", bodyType: "suv", country: "usa", image: "https://cdn.motor1.com/images/mgl/1mnqL/s1/2021-jeep-cherokee.jpg" },
    { name: "Tesla Model Y", budget: "high", bodyType: "suv", country: "usa", image: "https://cdn.motor1.com/images/mgl/1eZ27/s1/2020-tesla-model-y.jpg" },
    { name: "Cadillac Escalade", budget: "premium", bodyType: "suv", country: "usa", image: "https://cdn.motor1.com/images/mgl/2LwPg/s1/2021-cadillac-escalade.jpg" },
  
    { name: "Chevrolet Spark", budget: "low", bodyType: "hatchback", country: "usa", image: "https://cdn.motor1.com/images/mgl/3NmVo/s1/2020-chevrolet-spark.jpg" },
    { name: "Ford Fiesta", budget: "mid", bodyType: "hatchback", country: "usa", image: "https://cdn.motor1.com/images/mgl/5WoxY/s1/2019-ford-fiesta.jpg" },
    { name: "Mini Cooper", budget: "high", bodyType: "hatchback", country: "usa", image: "https://cdn.motor1.com/images/mgl/6TxEp/s1/2021-mini-cooper.jpg" },
    { name: "Volkswagen Golf", budget: "premium", bodyType: "hatchback", country: "usa", image: "https://cdn.motor1.com/images/mgl/8pZAb/s1/2021-volkswagen-golf.jpg" },
  
    { name: "Volkswagen Passat", budget: "low", bodyType: "sedan", country: "germany", image: "https://cdn.motor1.com/images/mgl/1Yl3P/s1/2019-volkswagen-passat.jpg" },
    { name: "Audi A4", budget: "mid", bodyType: "sedan", country: "germany", image: "https://cdn.motor1.com/images/mgl/1Xg1R/s1/2020-audi-a4.jpg" },
    { name: "BMW 3 Series", budget: "high", bodyType: "sedan", country: "germany", image: "https://cdn.motor1.com/images/mgl/0LwDX/s1/2020-bmw-3-series.jpg" },
    { name: "Mercedes-Benz C-Class", budget: "premium", bodyType: "sedan", country: "germany", image: "https://cdn.motor1.com/images/mgl/2J2Ob/s1/2020-mercedes-benz-c-class.jpg" },
  
    { name: "Volkswagen Tiguan", budget: "low", bodyType: "suv", country: "germany", image: "https://cdn.motor1.com/images/mgl/1OYvJ/s1/2020-volkswagen-tiguan.jpg" },
    { name: "Audi Q5", budget: "mid", bodyType: "suv", country: "germany", image: "https://cdn.motor1.com/images/mgl/1Qm4p/s1/2020-audi-q5.jpg" },
    { name: "BMW X3", budget: "high", bodyType: "suv", country: "germany", image: "https://cdn.motor1.com/images/mgl/1BtMO/s1/2020-bmw-x3.jpg" },
    { name: "Mercedes-Benz GLE", budget: "premium", bodyType: "suv", country: "germany", image: "https://cdn.motor1.com/images/mgl/2NQl5/s1/2020-mercedes-benz-gle.jpg" },
  
    { name: "Volkswagen Golf", budget: "low", bodyType: "hatchback", country: "germany", image: "https://cdn.motor1.com/images/mgl/8pZAb/s1/2021-volkswagen-golf.jpg" },
    { name: "Audi A3", budget: "mid", bodyType: "hatchback", country: "germany", image: "https://cdn.motor1.com/images/mgl/1YgJj/s1/2020-audi-a3.jpg" },
    { name: "BMW 1 Series", budget: "high", bodyType: "hatchback", country: "germany", image: "https://cdn.motor1.com/images/mgl/7Ro07/s1/2020-bmw-1-series.jpg" },
    { name: "Mercedes-Benz A-Class", budget: "premium", bodyType: "hatchback", country: "germany", image: "https://cdn.motor1.com/images/mgl/0JN1R/s1/2020-mercedes-benz-a-class.jpg" }
  ];
  
