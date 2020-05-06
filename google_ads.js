var canRunAds = true;
if (typeof google != 'undefined' && (typeof for_a == 'undefined' || (typeof for_a != 'undefined' && !for_a))) {
    if (Modernizr.mq('only screen and (max-width: 768px)')) {
        var pageOptions = {
            'pubId': 'pub-0809996796910370',
            'query': modelKeywordForCommercial,
            'channel': '2842393112',
            'hl': lang
        };

        if ($('#Bottom_Advertisment').length > 0) {
            var adblock1 = {
                'container': 'Bottom_Advertisment',
                'number': '1',
                'width': '320px',
                'lines': '1',
                'fontSizeTitle': 16,
                'fontSizeDescription': 12,
                'fontSizeDomainLink': 16,
                'colorTitleLink': '#1122CC',
                'colorText': '#333333',
                'colorDomainLink': '#E27537'
            };
            new google.ads.search.Ads(pageOptions, adblock1);
        }
        if (Modernizr.mq('only screen and (max-width: 768px)') && !hasEbayAds) {
            if ($('#Top_Advertisment').length > 0) {
                var pageOptions3 = {
                    'pubId': 'pub-0809996796910370',
                    'query': modelKeywordForCommercial,
                    'channel': '4877529513',
                    'hl': lang
                };

                var adblock3 = {
                    'container': 'Top_Advertisment',
                    'number': '1',
                    'lines': '1',
                    'fontSizeTitle': 16,
                    'fontSizeDescription': 12,
                    'fontSizeDomainLink': 16,
                    'colorTitleLink': '#1122CC',
                    'colorText': '#333333',
                    'colorDomainLink': '#E27537'
                };
                new google.ads.search.Ads(pageOptions3, adblock3);
            }
        }
    } else {
        var pageOptions = {
            'pubId': 'pub-0809996796910370',
            'query': modelKeywordForCommercial,
            'rolloverAdBackgroundColor': '#FCF0E9',
            'rolloverLinkUnderline': true,
            'channel': '7191867513',
            'hl': lang
        };

        if ($('#Bottom_Advertisment').length > 0) {
            var adblock1 = {
                'container': 'Bottom_Advertisment',
                'number': '4',
                'fontSizeTitle': 16,
                'fontSizeDescription': 12,
                'fontSizeDomainLink': 16,
                'rolloverAdBackgroundColor': '#FCF0E9',
                'rolloverLinkUnderline': true,
                'colorTitleLink': '#1122CC',
                'colorText': '#333333',
                'colorDomainLink': '#E27537'
            };
            new google.ads.search.Ads(pageOptions, adblock1);
        }

        if ($('#Left_Advertisment').length > 0) {
            var pageOptions2 = {
                'pubId': 'pub-0809996796910370',
                'query': modelKeywordForCommercial,
                'rolloverAdBackgroundColor': '#eef6ff',
                'rolloverLinkUnderline': true,
                'channel': '8947802315',
                'hl': lang
            };

            var adblock2 = {
                'container': 'Left_Advertisment',
                'width': '170px',
                'fontSizeTitle': 16,
                'fontSizeDescription': 12,
                'fontSizeDomainLink': 16,
                'colorTitleLink': '#1122CC',
                'colorText': '#333333',
                'colorDomainLink': '#E27537',
                'colorBackground': '#F8F8F8',
                'colorAdBorder': '#F8F8F8',
                'colorBorder': '#F8F8F8'
            };

            new google.ads.search.Ads(pageOptions2, adblock2);
        }
        if (!Modernizr.mq('only screen and (max-width: 768px)') && !hasEbayAds) {
            if ($('#Top_Advertisment').length > 0) {
                var pageOptions3 = {
                    'pubId': 'pub-0809996796910370',
                    'query': modelKeywordForCommercial,
                    'channel': '4877529513',
                    'hl': lang
                };

                var adblock3 = {
                    'container': 'Top_Advertisment',
                    'number': '3',
                    'lines': '2',
                    'fontSizeTitle': 16,
                    'fontSizeDescription': 12,
                    'fontSizeDomainLink': 16,
                    'colorTitleLink': '#1122CC',
                    'colorText': '#333333',
                    'colorDomainLink': '#E27537'
                };
                new google.ads.search.Ads(pageOptions3, adblock3);
            }
        }
    }
}