describe("calculateInsurancePerCountry", function() {
    it("should Return 530 for horsepower 120, age 25 and country autria", function() {
        expect(calculateInsurancePerCountry(120, 25, "austria"))
            .toEqual(530);
    });

    it("should Return 676 for horsepower 120, age 25 and country hungary", function() {
        expect(calculateInsurancePerCountry(120, 25, "hungary"))
            .toEqual(676);
    });

    it("should Return 693 for horsepower 120, age 25 and country greece", function() {
        expect(calculateInsurancePerCountry(120, 25, "greece"))
            .toEqual(693);
    });

    it("should Return 515 for horsepower 120, age 25.8 and country autria", function() {
        expect(calculateInsurancePerCountry(120, 25.8, "austria"))
            .toEqual(515);
    });
});

// For Austria : insurance = horse_power x 100 / age   + 50;
// For Hungary: insurance = horse_power x 120 / age  + 100;
// For Greece: insurance = horse_power x 150 / (age+3)  + 50;